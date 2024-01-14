import { FC } from "react";
import cn from "classnames";

import BanLable from "./BanLable";
import styles from "./CharacterCard.module.scss";
import { ICharacter } from "types/character.interface";

const CharacterCard: FC<ICharacter> = ({
    index,
    player_name,
    hour_play,
    player_money,
    bank_money,
    player_banned,
}) => {
    const name = player_name.split("_");

    const selectCharacterHandler = () => {
        if ("cef" in window) {
            cef.emit("authorization:select.character", player_name);
        }
    };

    return (
        <div className={styles.card}>
            {player_banned && <div className={styles.overview} />}

            <div className={styles.lable}>Персонаж №{index + 1}</div>

            <div>
                <div className={styles.name}>{name[0]}</div>
                <div className={styles.surname}>{name[1]}</div>
                <div className={styles.line}>
                    <svg
                        width="341"
                        height="2"
                        viewBox="0 0 341 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.3"
                            d="M0 1L341 1.00003"
                            stroke="url(#paint0_linear_3_277)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_3_277"
                                x1="0"
                                y1="1"
                                x2="341"
                                y2="1"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0" />
                                <stop offset="0.501736" stopColor="white" />
                                <stop offset="1" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className={styles.boxTitles}>
                <div className={styles.flex}>
                    <div className={styles.title}>Часов в игре</div>
                    <div className={styles.value}>{hour_play} часов</div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.title}>Деньги на руках</div>
                    <div className={styles.value}>${player_money}</div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.title}>Деньги в банке</div>
                    <div className={styles.value}>${bank_money}</div>
                </div>
            </div>

            {player_banned && <BanLable term="12 дней" residueBan="2 дня" />}

            {player_banned ? (
                <button className={cn(styles.button, styles.banBtn)} disabled>
                    Выбор не доступен
                </button>
            ) : (
                <button className={cn(styles.button)} onClick={selectCharacterHandler}>
                    Выбрать персонажа
                </button>
            )}
        </div>
    );
};
export default CharacterCard;
