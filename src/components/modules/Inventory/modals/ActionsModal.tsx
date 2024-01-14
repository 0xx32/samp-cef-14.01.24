import { FC, useState } from "react";
import cn from "classnames";

import styles from "./modals.module.scss";

// import ammunitionIcon from "assets/inventory/modal/ammunation.svg";
import weightIcon from "assets/inventory/modal/weight.svg";
import { IModalData, IModalState } from "components/A-screens/inventory/Inventory.interface";
import { inventoryIconUrl } from "constants/inventory-item.constants";
import { useVehicleId } from "store/inventory-store/inventory.store";
import ModalContainer from "components/shared/ModalContainer/ModalContainer";
import { ModalConfiramation } from "./ModalConfiramation";

interface IProps {
    onClose: () => void;
    transferModalOpen?: () => void;
    itemData: IModalData | undefined;
    setModalState: (state: IModalState) => void;
}

export interface IAction {
    name: "remove" | "drop" | null;
    callback: () => void;
}

export const ActionsModal: FC<IProps> = ({ itemData, onClose, setModalState }) => {
    const [modalConfirmShow, setModalConfirmShow] = useState(false);
    const [action, setAction] = useState<IAction>({
        name: null,
        callback: () => {},
    });

    if (!itemData) return;

    const { vehicleId } = useVehicleId((state) => state);

    const removeSlot = () => {
        setAction({
            name: "remove",
            callback: () => {
                if ("cef" in window) {
                    cef.emit("inventory:delete.item", JSON.stringify({ slot_id: itemData.slotid }));
                }

                setModalConfirmShow(false);
                onClose();
            },
        });
        setModalConfirmShow(true);
    };

    const usageHandler = () => {
        if ("cef" in window) {
            if (vehicleId) {
                cef.emit("inventory:use.item", JSON.stringify({ slot_use: itemData.slotid, vehicleid: vehicleId }));
            } else {
                cef.emit("inventory:use.item", JSON.stringify({ slot_use: itemData.slotid }));
            }
        }

        onClose();
    };
    const removeGearItem = () => {
        if ("cef" in window) {
            cef.emit(
                "inventory:clothes.off",
                JSON.stringify({
                    type: 0,
                    slotid_clothes: itemData.slotid,
                    slotid: 1,
                })
            );
        }
        onClose();
    };

    const divisionHandler = () => {
        setModalState({ modalType: "division", modalData: itemData });
    };

    const dropItem = () => {
        setAction({
            name: "drop",
            callback: () => {
                if ("cef" in window) {
                    cef.emit("inventory:drop.item", JSON.stringify({ slot_id: itemData.slotid }));
                }
                setModalConfirmShow(false);
                onClose();
            },
        });
        setModalConfirmShow(true);
    };

    if (modalConfirmShow)
        return (
            <ModalContainer onClose={() => setModalConfirmShow(false)}>
                <ModalConfiramation onClose={() => setModalConfirmShow(false)} item={itemData} action={action} />
            </ModalContainer>
        );

    return (
        <div className={cn(styles.modal, styles.actionsModal)}>
            <div className={styles.modalTop}>
                <div className={styles.weightItem}>
                    <img src={weightIcon} alt="" />
                    <span>0 гр.</span>
                </div>

                <div>
                    <div className={styles.imgWrap}>
                        <img src={inventoryIconUrl + itemData.icon} alt={inventoryIconUrl + itemData.icon} />
                    </div>
                </div>
                <div className={styles.textBox}>
                    <h2 className={styles.title}>{itemData.item_name}</h2>

                    <p className={styles.text}>{itemData?.description}</p>
                </div>
            </div>

            {/* {itemData.ammunitionType && (
                <div className={styles.ammunition}>
                    <div>
                        <img src={ammunitionIcon} alt="" />
                        <span>Патроны</span>
                    </div>
                    <div>{itemData.ammunitionType}</div>
                </div>
            )} */}

            <div className={styles.buttonsBox}>
                <div className={styles.buttonsRow}>
                    {itemData?.typeInv === "gear" ? (
                        <button onClick={removeGearItem}>Снять</button>
                    ) : (
                        <button onClick={usageHandler}>Использовать</button>
                    )}
                    <button onClick={removeSlot}>Удалить</button>
                    <button>Прикрепить</button>
                    <button>Передать</button>
                    <button onClick={dropItem}>Выбросить</button>
                </div>
                <button className={cn(styles.button, styles.singleButton)} onClick={divisionHandler}>
                    Разделить
                </button>
            </div>
            {/* <div className={styles.buttonsBox}>
                <div className={styles.buttonsRow}>
                    {itemData?.typeInv === "gear" ? (
                        <button onClick={removeGearItem}>Снять</button>
                    ) : (
                        <button onClick={usageHandler}>Использовать</button>
                    )}
                    <button onClick={removeSlot}>Удалить</button>
                    <button>Прикрепить</button>
                    <button>Передать</button>
                    <button onClick={dropItem}>Выбросить</button>
                </div>
                <button className={cn(styles.button, styles.singleButton)} onClick={divisionHandler}>
                    Разделить
                </button>
            </div> */}
        </div>
    );
};
