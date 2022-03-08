import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [active, setActive] = useState<boolean>(false);

    function startQuiz(): void {
        setActive(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz(): void {
        setActive(false);
    }

    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>{attempts}</div>
            <Button onClick={startQuiz} disabled={active || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!active}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={active}>
                Mulligan
            </Button>
        </div>
    );
}
