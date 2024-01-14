import { FC } from "react";
import cn from "classnames";

import styles from "./NotSpawnCard.module.scss";

const NotSpawnCard: FC<{ name: string }> = ({ name }) => {
    let text = "Спавн не доступен";

    switch (name) {
        case "Дом":
            text = "У вас нет дома";
            break;
        case "Организация":
            text = "Вы не состоите ни в какой организации";
            break;
    }

    return (
        <div className={styles.card}>
            <div className={styles.lable}>{name}</div>

            <div className={styles.text}>{text}</div>

            <div className={styles.backgroundImg}>
                <svg
                    width="322"
                    height="429"
                    viewBox="0 0 322 429"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.1"
                        d="M40.25 160.875H53.6667V107.25C53.6667 48.1016 101.806 0 161 0C220.194 0 268.333 48.1016 268.333 107.25V160.875H281.75C292.421 160.889 302.65 165.131 310.195 172.67C317.741 180.21 321.986 190.431 322 201.094V388.781C322 410.964 303.932 429 281.75 429H40.25C18.0678 429 0 410.964 0 388.781V201.094C0 178.911 18.0678 160.875 40.25 160.875ZM232.556 107.25C232.556 67.8177 200.463 35.75 161 35.75C121.537 35.75 89.4444 67.8177 89.4444 107.25V160.875H232.556V107.25ZM143.111 298.906V339.625C143.111 344.366 144.996 348.912 148.351 352.265C151.705 355.617 156.256 357.5 161 357.5C165.744 357.5 170.295 355.617 173.649 352.265C177.004 348.912 178.889 344.366 178.889 339.625V298.906C189.533 292.703 196.778 281.299 196.778 268.125C196.778 248.409 180.731 232.375 161 232.375C141.269 232.375 125.222 248.409 125.222 268.125C125.222 281.299 132.467 292.703 143.111 298.906Z"
                        fill="white"
                    />
                </svg>
            </div>

            <button className={cn(styles.button)} disabled>
                Выбрать
            </button>
        </div>
    );
};
export default NotSpawnCard;
