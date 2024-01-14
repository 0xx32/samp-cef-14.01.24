import { FC, FormEvent, useState } from "react";
import cn from "classnames";

import styles from "./modals.module.scss";
import { IInventoryItem } from "types/inventory.interface";

interface IProps {
    onClose: () => void;
    itemData: IInventoryItem;
}

export const ModalTransferItem: FC<IProps> = ({ onClose, itemData }) => {
    const [transferId, setTransferId] = useState("");
    const [isError, setIsError] = useState(false);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!transferId) return setIsError(true);

        setIsError(false);
    };

    return (
        <div className={cn((styles.modalTransfer, styles.modal))}>
            <h2 className={styles.title}>Передать предмет {itemData.item_name}</h2>

            <p className={cn(styles.text)}>Для передачи предмета другому игроку укажите его ID</p>

            <form className={styles.form} onSubmit={onSubmit}>
                <div className={styles.inputBox}>
                    <input
                        type="number"
                        inputMode="numeric"
                        placeholder="Укажите ID"
                        className={styles.input}
                        value={transferId}
                        onChange={(e) => setTransferId(e.target.value)}
                    />
                    {isError && <div className={styles.errorMessage}>Вы не ввели ID игрока</div>}
                </div>

                <button type="submit" className={cn(styles.button, styles.confirmBtn)}>
                    Подтверждаю
                </button>
                <div
                    className={cn(styles.button, styles.cancelBtn)}
                    onClick={() => {
                        console.log("regerge");

                        onClose();
                    }}
                >
                    Отмена
                </div>
            </form>
        </div>
    );
};
