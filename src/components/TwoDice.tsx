import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setd1] = useState<number>(1);
    const [d2, setd2] = useState<number>(6);
    function rollLeft(): void {
        setd1(d6());
    }
    function rollRight(): void {
        setd2(d6());
    }

    function testWinLose(): string {
        let str = "";
        if (d1 === d2 && d1 !== 1) {
            str = "You Win";
        }
        if (d1 === d2 && d1 == 1) {
            str = "You Lose";
        }
        return str;
    }
    return (
        <div>
            <span>{testWinLose()}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            <span data-testid="left-die">{d1}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            <span data-testid="right-die">{d2}</span>
        </div>
    );
}
