import { FC, FormEvent, useEffect, useState } from "react";

import SubTitle from "components/shared/SubTitle/SubTitle";
import Title from "components/shared/Title/Title";

import styles from "./Auth.module.scss";

import logo from "assets/Logo.png";
import lockIcon from "assets/lockIcon.svg";
import authBackground from "assets/authBackground.png";

const Auth: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const [numberOfAttempts, setNumberOfAttempts] = useState(5);
    const [isError, setIsError] = useState(false);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();

        if (inputValue.length === 0) return;

        if ("cef" in window) {
            cef.emit("authorization:two.factor.data", inputValue);
        }
    };

    const disconnectHandler = () => {
        if ("cef" in window) {
            cef.emit("authorization:two.factor.close");
        }
    };

    useEffect(() => {
        if ("cef" in window) {
            cef.on("authorization:two.factor.error", (numberOfAttempts: number) => {
                setNumberOfAttempts(numberOfAttempts);
                setIsError(true);
            });
        }
    }, []);

    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url('${authBackground}')` }}>
            <button className={styles.close} onClick={disconnectHandler}>
                Отключится
            </button>

            <div className={styles.block}>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="logo" width={183} height={160} />
                </div>
                <Title title="Авторизация" />
                <SubTitle
                    text="Введите код двухфакторной защиты, для продолжения"
                    className={styles.subTitle}
                />

                <form className={styles.form} onSubmit={submitHandler}>
                    <div className={styles.inputBox}>
                        <div className={styles.inputIcon}>
                            <img src={lockIcon} alt="lock" width={70} height={70} />
                        </div>
                        <input
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="Введите код"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setIsError(false);
                            }}
                        />
                    </div>
                    {isError && (
                        <div className={styles.errorMessage}>
                            Код не верный у вас осталось {numberOfAttempts} попыток!
                        </div>
                    )}
                    <button className={styles.formBtn}>Продолжить</button>
                </form>
                {/* <button className={styles.backBtn}>Вернуться назад</button> */}
            </div>
        </div>
    );
};
export default Auth;
