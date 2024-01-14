import cn from "classnames";

import styles from "./SpawnCard.module.scss";
import { FC } from "react";

export interface ISpawnCard {
    name: string;
    img: string;
    text: string;
    specName: string;
}

const SpawnCard: FC<ISpawnCard> = ({ name, img, text, specName }) => {
    const selectSpawnHandler = () => {
        if ("cef" in window) {
            cef.emit("authorization:spawn.select", specName);
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.lable}>{name}</div>

            <div className={styles.block}>
                <div className={styles.imgWrap}>
                    <img src={img} alt="img" />
                </div>

                <div className={styles.text}>{text}</div>
            </div>
            <button className={cn(styles.button)} onClick={selectSpawnHandler}>
                Выбрать
            </button>
        </div>
    );
};
export default SpawnCard;
