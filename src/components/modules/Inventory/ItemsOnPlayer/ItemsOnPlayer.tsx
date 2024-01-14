import { FC } from "react";

import InventoryTitle from "../InventoryTitle/InventaryTitle";
import { GearSlotDefault } from "./GearSlotDefault/GearSlotDefault";

import { GearItem } from "./GearItem/GearItem";

import { useInventoryStore } from "store/inventory-store/inventory.store";
import { IModalState } from "components/A-screens/inventory/Inventory.interface";

import styles from "./ItemsOnPlayer.module.scss";
import backpackIcon from "assets/inventory/icons/backpack-2.svg";
import { GearSlot } from "./GearSlot/GearSlot";

interface IProps {
    setModal: (state: IModalState) => void;
}

export const ItemsOnPlayer1: FC<IProps> = ({ setModal }) => {
    const { playerGear } = useInventoryStore((state) => state);

    return (
        <div className={styles.wornItems}>
            <InventoryTitle
                title="Инвентарь персонажа"
                subTitle="В инвентаре можно управлять вашими предметами"
                img={backpackIcon}
                classNames={styles.header}
            />

            <h2 className={styles.title}>Надетая одежда</h2>

            <div className={styles.grid}>
                {playerGear.map((item) =>
                    item.itemData ? (
                        <GearSlot key={item.gearSlotId} slotid={item.slotId}>
                            <GearItem
                                item={item.itemData}
                                setModal={setModal}
                                slotId={item.slotId}
                                gearSlotId={item.gearSlotId}
                                slotType={item.slotType}
                            />
                        </GearSlot>
                    ) : (
                        <GearSlot key={item.gearSlotId} slotid={item.slotId} classNames={styles.slot}>
                            <GearSlotDefault icon={item.icon} name={item.name} />
                        </GearSlot>
                    )
                )}
            </div>
        </div>
    );
};
