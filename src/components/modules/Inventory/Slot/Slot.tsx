import { FC } from "react";
import cn from "classnames";
import { useDroppable } from "@dnd-kit/core";

import { useActiveSlot } from "store/inventory-store/inventory.store";
import styles from "./Slot.module.scss";

interface ISlot {
    slotid: number;
    classNames?: string;
    inStyle?: React.CSSProperties;
    children?: React.ReactNode;
}

const Slot: FC<ISlot> = ({ slotid, classNames, children }) => {
    const activeSlot = useActiveSlot((state) => state.slotId);

    const { setNodeRef } = useDroppable({
        id: slotid + 1,
        data: { slotid },
    });

    return (
        <div
            className={cn(styles.slot, classNames, {
                [styles.active]: activeSlot === slotid,
            })}
            id={slotid.toString()}
            ref={setNodeRef}
        >
            {children}
        </div>
    );
};
export default Slot;
