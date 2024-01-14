import { FC } from "react";

import SubTitle from "components/shared/SubTitle/SubTitle";
import Title from "components/shared/Title/Title";
import CharacterCard from "components/modules/character-selection/CharacterCard/CharacterCard";

import type { ICharacter } from "types/character.interface";

import characterBackground from "assets/characterBackground.png";
import styles from "./CharacterSelection.module.scss";

const CharacterSelection: FC<{ characterList: ICharacter[] }> = ({
    characterList,
}) => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url('${characterBackground}')` }}
        >
            <div className={styles.effect} />

            <div className={styles.top}>
                <Title title="ВЫБОР ПЕРСОНАЖА" />
                <SubTitle
                    text="Выберите персонажа, которым Вы продолжите игру на
                нашем проекте"
                />
            </div>

            <div className={styles.block}>
                {characterList.length > 0 &&
                    characterList.map((item, index) => (
                        <CharacterCard {...item} key={index} index={index} />
                    ))}
            </div>
        </div>
    );
};
export default CharacterSelection;
