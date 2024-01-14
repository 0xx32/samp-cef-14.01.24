import { useEffect } from "react";

export const useModal = (
    onClose: () => void,
    ref: React.RefObject<HTMLDivElement>
) => {
    useEffect(() => {
        const handleWrapperClick = (event: MouseEvent) => {
            const { target } = event;

            if (target instanceof Node && ref.current === target) {
                onClose && onClose();
            }
        };
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose && onClose();
            }
        };

        window.addEventListener("click", handleWrapperClick);
        window.addEventListener("keydown", handleEscapePress);

        return () => {
            window.removeEventListener("click", handleWrapperClick);
            window.removeEventListener("keydown", handleEscapePress);
        };
    }, [onClose]);
};
