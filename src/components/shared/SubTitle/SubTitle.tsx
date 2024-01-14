import { FC } from "react";
import cn from "classnames";
import styles from "./subTitle.module.scss";

interface IProps {
    text: string;
    className?: string;
}

const SubTitle: FC<IProps> = ({ text, className }) => {
    return <p className={cn(styles.text, className)}> {text}</p>;
};
export default SubTitle;
