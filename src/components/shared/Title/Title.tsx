import { FC } from "react";
import styles from "./Title.module.scss";

const Title: FC<{ title: string }> = ({ title }) => {
    return <h1 className={styles.title}>{title}</h1>;
};
export default Title;
