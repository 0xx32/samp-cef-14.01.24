import { FC } from "react";

import styles from "./CharacterCard.module.scss";

interface IProps {
    term: string;
    residueBan: string;
}

const BanLable: FC<IProps> = ({ term, residueBan }) => {
    return (
        <div className={styles.banBox}>
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
                            <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                            />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className={styles.banLable}>Персонаж забанен на {term}!</div>
            <div className={styles.flex}>
                <div className={styles.title}>До разблокировки</div>
                <div className={styles.value}>{residueBan}</div>
            </div>
        </div>
    );
};
export default BanLable;
