import { FC } from "react";
import cn from "classnames";
import { useDroppable } from "@dnd-kit/core";

import { useActiveSlot } from "store/inventory-store/inventory.store";
import styles from "./GearSlot.module.scss";

interface IGearSlot {
    slotid: number;
    classNames?: string;
    inStyle?: React.CSSProperties;
    children?: React.ReactNode;
}

const GearSlot: FC<IGearSlot> = ({ slotid, classNames, children }) => {
    const activeSlot = useActiveSlot((state) => state.slotId);

    const { setNodeRef } = useDroppable({
        id: slotid + 1,
        data: { slotid: slotid,  typeSlot: 'gear'},
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
export { GearSlot };
