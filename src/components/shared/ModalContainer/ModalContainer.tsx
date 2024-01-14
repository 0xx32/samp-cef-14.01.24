import { FC, useEffect, useRef, useState } from "react";
import Portal, { createContainer } from "components/shared/Portal/Portal";
import { useModal } from "./useModal";

import styles from "./ModalContainer.module.scss";

interface IProps {
    onClose: () => void;

    children: React.ReactNode;
}

const MODAL_CONTAINER_ID = "modal-container";

const ModalContainer: FC<IProps> = ({ onClose, children }) => {
    const [isMounted, setMounted] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);

    onClose && useModal(onClose, rootRef);

    useEffect(() => {
        createContainer({ id: MODAL_CONTAINER_ID });
        setMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <Portal id={MODAL_CONTAINER_ID}>
            <div className={styles.wrap} ref={rootRef}>
                {children}
            </div>
        </Portal>
    );
};

export default ModalContainer;
