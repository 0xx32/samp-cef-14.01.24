import { FC } from "react";

import Title from "components/shared/Title/Title";
import SubTitle from "components/shared/SubTitle/SubTitle";
import NotSpawnCard from "components/modules/spawn-selection/NotSpawnCard/NotSpawnCard";
import SpawnCard from "components/modules/spawn-selection/SpawnCard/SpawnCard";

import { ISpawnResponceData } from "types/spawn.interface";

import styles from "./SpawnSelection.module.scss";

import characterBackground from "assets/characterBackground.png";
import { spawnList } from "./data";

const SpawnSelection: FC<{ spawnData: ISpawnResponceData }> = ({
    spawnData,
}) => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url('${characterBackground}')` }}
        >
            <div className={styles.effect} />

            <div className={styles.top}>
                <Title title="ВЫБОР СПАВНА" />
                <SubTitle text="Выберите одну из точек, на которой вы будете заспавнены" />
            </div>
            <div className={styles.block}>
                {spawnList.map((item, index) => {
                    // @ts-ignore
                    if (spawnData && !spawnData[item.specName]) {
                        return <NotSpawnCard {...item} key={index} />;
                    } else {
                        return <SpawnCard {...item} key={index} />;
                    }
                })}
            </div>
        </div>
    );
};
export default SpawnSelection;
