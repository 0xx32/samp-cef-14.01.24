import { FC } from "react";
import cn from "classnames";

import styles from "./GearSlotDefault.module.scss";

interface IProps {
    inStyles?: string;
    icon: string;
    name: string;
}

export const GearSlotDefault: FC<IProps> = ({ inStyles, icon, name }) => {
    return (
        <div className={cn(styles.slot, inStyles)}>
            <div className={styles.icon}>
                <img src={icon} draggable={false}  alt={icon} />
            </div>
            <div className={styles.name}>{name}</div>
        </div>
    );
};
