import { FC } from "react";

import InventoryTitle from "../InventoryTitle/InventaryTitle";
import { StatusIndicator } from "../StatusIndicator/StatusIndicator";

import titleIcon from "assets/inventory/icons/status.svg";

import styles from "./PlayerCondition.module.scss";
import { IPlayerState } from "types/inventory.interface";
import { statusData } from "./data";

export const PlayerCondition: FC<{ playerState: IPlayerState | null }> = ({ playerState }) => {
    return (
        <div className={styles.playerCondition}>
            <InventoryTitle
                title="Состояние"
                subTitle="Здоровье, броня, вес инвентаря"
                img={titleIcon}
                classNames={styles.header}
            />

            <div className={styles.statusBar}>
                {statusData.map((item, index) => {
                    return (
                        <StatusIndicator
                            key={index}
                            icon={item.icon}
                            //@ts-ignore
                            value={playerState ? playerState[item.type] : 0}
                            colorFill={item.colorFill}
                        />
                    );
                })}
            </div>
        </div>
    );
};
