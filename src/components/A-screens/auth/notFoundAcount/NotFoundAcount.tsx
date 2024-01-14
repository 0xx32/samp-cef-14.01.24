import { FC } from 'react';

import styles from "./NotFoundAcount.module.scss";

import authBackground from "assets/authBackground.png";

const NotFoundAcount:FC = () => {
    return (
        <div
            className={styles.wrapper}
            style={{ backgroundImage: `url('${authBackground}')` }}
        >
            <div className={styles.notFound}>
                <div className={styles.notFoundImage}>
                    <svg
                        width="204"
                        height="194"
                        viewBox="0 0 204 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M199.761 147.98L127.698 15.5092C116.12 -3.98278 87.8957 -4.00868 76.3019 15.5092L4.24212 147.98C-7.59387 167.898 6.73594 193.119 29.9342 193.119H174.063C197.242 193.119 211.597 167.918 199.761 147.98ZM102 169.213C95.4106 169.213 90.0468 163.849 90.0468 157.26C90.0468 150.671 95.4106 145.307 102 145.307C108.589 145.307 113.953 150.671 113.953 157.26C113.953 163.849 108.589 169.213 102 169.213ZM113.953 121.401C113.953 127.99 108.589 133.354 102 133.354C95.4106 133.354 90.0468 127.99 90.0468 121.401V61.6351C90.0468 55.0457 95.4106 49.682 102 49.682C108.589 49.682 113.953 55.0457 113.953 61.6351V121.401Z"
                            fill="url(#paint0_linear_34_42)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_34_42"
                                x1="102"
                                y1="0.880493"
                                x2="102"
                                y2="193.119"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#9A6F4A" />
                                <stop offset="1" stopColor="#F3CF96" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.notFoundText}>
                    Аккаунт не найден. Возможно, вы не зарегистрированы!
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <button className={styles.backBtn}>Вернуться назад</button>
            </div>
        </div>
    );
};
export default NotFoundAcount;
