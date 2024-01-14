import { useState } from "react";
import { useEffect } from "react";

export const useKeyPress = (keyTarget: string) => {
    const [isKeyPressed, seyIsKeyPressed] = useState(false);

    const downHandler = ({ key }: { key: string }) => {
        if (keyTarget === key) seyIsKeyPressed(true);
    };
    const upHandler = ({ key }: { key: string }) => {
        if (keyTarget === key) seyIsKeyPressed(false);
    };

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []);

    return isKeyPressed;
};
