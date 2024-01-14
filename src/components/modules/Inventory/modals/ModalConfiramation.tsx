import { FC } from "react";
import cn from "classnames";

import styles from "./modals.module.scss";
import { IInventoryItem } from "types/inventory.interface";
import { IAction } from "./ActionsModal";

interface IProps {
    item: IInventoryItem;
    action: IAction;
    onClose: () => void;
}

export const ModalConfiramation: FC<IProps> = ({ item, action, onClose }) => {
    if (!action.name || !action.callback) return;

    return (
        <div className={cn(styles.modalConfirmation, styles.modal)}>
            <h2 className={styles.title}>Подтвердите действие</h2>

            <p className={cn(styles.text)}>
                {action.name === "remove" ? "Удалить" : "Выбросить"} предмет {item.item_name}
            </p>

            <button className={cn(styles.button, styles.confirmBtn)} onClick={() => action.callback()}>
                Подтверждаю
            </button>
            <button className={cn(styles.button, styles.cancelBtn)} onClick={onClose}>
                Отмена
            </button>
        </div>
    );
};
