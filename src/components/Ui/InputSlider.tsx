import { FC, useState } from "react";

import Slider from "react-input-slider";

interface IProps {
    setValue: (state: string) => void;
    max: number
}

const InputSlider: FC<IProps> = ({ setValue, max }) => {
    const [state, setState] = useState({ x: 0 });

    return (
        <Slider
            axis="x"
            x={state.x}
            onChange={({ x }) => {
                setState((state) => ({ ...state, x }));
                setValue(String(x));
            }}
            styles={{
                track: {
                    backgroundColor: "#222222",
                    height: 5,
                    width: 150,
                },
                active: {
                    backgroundColor: "#F9D59B",
                },
                thumb: {
                    width: 8,
                    height: 8,
                    borderRadius: "none",
                },
                disabled: {
                    opacity: 0.5,
                },
            }}
            xmax={max}
            xmin={1}
        />
    );
};

export { InputSlider };
