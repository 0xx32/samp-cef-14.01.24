import { FC, FormEvent, useState } from "react";
import cn from "classnames";

import styles from "./modals.module.scss";
import { IInventoryItem } from "types/inventory.interface";
import { IModalState } from "components/A-screens/inventory/Inventory.interface";
import { InputSlider } from "components/Ui/InputSlider";

interface IProps {
    itemData: IInventoryItem;
    setModalState: (state: IModalState) => void;
    onClose: () => void;
}

const ItemDivisionModal: FC<IProps> = ({ itemData, setModalState, onClose }) => {
    const [value, setValue] = useState("1");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data = {
            slot_id: itemData.slotid,
            value: value, 
        };

        if ("cef" in window) {
            cef.emit("inventory:split.slot", JSON.stringify(data));
            onClose();
        }
    };

    const cancelHanlder = () => {
        setModalState({ modalType: "actions", modalData: itemData });
    };

    return (
        <div className={cn(styles.modalDevisionItem, styles.modal)}>
            <h2 className={styles.title}>Разделение предмета</h2>

            <p className={cn(styles.text)}>Какой то текст бла бла </p>

            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.inputBox}>
                    <div className={styles.inputWrap}>
                        <div>Укажите кол-во</div>

                        <InputSlider setValue={setValue} max={itemData.count - 1} />
                    </div>

                    <input
                        type="number"
                        inputMode="numeric"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className={styles.value}
                    />
                </div>

                <button type="submit" className={cn(styles.button, styles.confirmBtn)}>
                    Использовать
                </button>
                <div className={cn(styles.button, styles.cancelBtn)} onClick={cancelHanlder}>
                    Отмена
                </div>
            </form>
        </div>
    );
};

export { ItemDivisionModal };
