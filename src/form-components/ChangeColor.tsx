import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const colors = [
    "red",
    "pink",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, chooseColor] = useState<string>(colors[0]);
    function updateColor(event: ChangeEvent) {
        chooseColor(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Change Color</h3>
                {colors.map((thisColor: string) => (
                    <Form.Check
                        inline
                        key={thisColor}
                        value={thisColor}
                        type="radio"
                        id="radio-colors"
                        label={thisColor}
                        name="colors"
                        checked={color === thisColor}
                        onChange={updateColor}
                        style={{ backgroundColor: thisColor }}
                    ></Form.Check>
                ))}
                <div>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: color }}
                    >
                        {color}.
                    </span>
                </div>
            </div>
        </div>
    );
}
