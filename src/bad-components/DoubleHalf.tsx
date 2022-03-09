import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface dhProps {
    getdh: () => void;
}

function Doubler({ getdh }: dhProps): JSX.Element {
    return <Button onClick={getdh}>Double</Button>;
}

function Halver({ getdh }: dhProps): JSX.Element {
    return <Button onClick={getdh}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => setDhValue(2 * dhValue);
    const half = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler getdh={double}></Doubler>
            <Halver getdh={half}></Halver>
        </div>
    );
}
