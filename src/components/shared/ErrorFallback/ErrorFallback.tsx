import { FC } from "react";
import styles from "./ErrorFallback.module.scss";
interface IProps {
    error: Error;
}

const ErrorFallback: FC<IProps> = ({ error }) => {
    return (
        <div role="alert" className={styles.root}>
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
    );
};

export { ErrorFallback };
