import { FC, useCallback, useEffect, useRef, useState } from "react";

import styles from "./StatusIndicator.module.scss";

interface Props {
    icon: string;
    value: number;
    colorFill: string;
}

export const StatusIndicator: FC<Props> = ({ icon, value = 0, colorFill }) => {
    const [status, setStatus] = useState("");
    const circleRef = useRef<SVGCircleElement>(null);

    const statusHandler = useCallback(
        (percent: number) => {
            const circle = circleRef.current;
            if (!circle) return;

            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = String(circumference);

            const offset = circumference - (percent / 100) * circumference;

            setStatus(String(offset));
        },
        [value, icon, colorFill]
    );

    useEffect(() => {
        statusHandler(value);
    }, [value]);

    return (
        <div className={styles.statusWrapp}>
            <svg className={styles.statusRing} width="76" height="76">
                <circle
                    stroke="rgba(255, 255, 255, 0.25)"
                    strokeWidth="2"
                    cx="38"
                    cy="38"
                    r="37"
                    fill="transparent"
                />
                <circle
                    className={styles.statusRingCircle}
                    stroke={colorFill}
                    strokeWidth="2"
                    cx="38"
                    cy="38"
                    r="37"
                    fill="transparent"
                    ref={circleRef}
                    style={{ strokeDashoffset: status }}
                />
            </svg>

            <img
                src={icon}
                alt="status"
                className={styles.icon}
                style={{ fill: colorFill }}
                draggable={false}
            />
            <div className={styles.value}>{value}%</div>
        </div>
    );
};
