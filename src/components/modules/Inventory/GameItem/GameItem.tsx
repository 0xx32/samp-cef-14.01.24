import { FC } from "react";
import cn from 'classnames'
import { useDraggable } from "@dnd-kit/core";

import styles from "./GameItem.module.scss";
import { IInventoryItem } from "types/inventory.interface";

import { IModalState } from "components/A-screens/inventory/Inventory.interface";
import { useActiveSlot } from "store/inventory-store/inventory.store";
import { inventoryIconUrl } from "constants/inventory-item.constants";

interface IProps {
    itemData: IInventoryItem;
    setModal: (state: IModalState) => void;
    classes?: string
}

const GameItem: FC<IProps> = ({ itemData, setModal, classes }) => {
    const setActiveSlot = useActiveSlot((state) => state.setSlot);

    const { isDragging, attributes, listeners, setNodeRef, transform } = useDraggable({
        id: itemData.slotid + 1,
        data: { slotid: itemData.slotid, typeSlot: itemData.type, typeInv: 'main' },
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: "transform 0.08s ease",
    };

    const styleOther = {
        opacity: isDragging ? 0 : 1,
        transition: "opacity 0.1s ease",
    };

    const onClickHandler = () => {
        setActiveSlot(itemData.slotid);
        setModal({ modalType: "actions", modalData: itemData });
    };

    return (
        <div
            className={cn(styles.gameitem, classes)}
            onClick={onClickHandler}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
        >
            <div className={styles.icon}>
                <img src={inventoryIconUrl + itemData.icon} alt={inventoryIconUrl + itemData.icon}  />
            </div>

            <div className={styles.name} style={styleOther}>
                {itemData.item_name}
            </div>
            {itemData.count && (
                <i className={styles.quantity} style={styleOther}>
                    {itemData.count}
                </i>
            )}
        </div>
    );
};

export { GameItem };
