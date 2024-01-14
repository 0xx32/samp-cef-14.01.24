import { FC } from "react";
import  cn  from 'classnames';

import styles from "./InventaryTitle.module.scss";

interface iProps {
    title: string;
    subTitle: string;
    img: string;
    classNames?: string;
}

const InventoryTitle: FC<iProps> = ({ classNames, title, subTitle, img }) => {
    return (
        <div className={cn(classNames, styles.root)}>
            <div className={styles.icon}>
                <img src={img} alt={title} draggable={false} />
            </div>
            <div className={styles.titleBox}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subTitle}>{subTitle}</div>
            </div>
        </div>
    );
};
export default InventoryTitle;
