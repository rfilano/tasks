import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, requestAttempts] = useState<string>("");
    function addAttempts() {
        if (!isNaN(parseInt(request))) {
            const numAttempts = parseInt(request);
            setAttempts(attempts + numAttempts);
        }
    }
    function useAttempt() {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of Attempts: {attempts} </span>
            <Form.Control
                type="number"
                value={request}
                onChange={(event: ChangeEvent) =>
                    requestAttempts(event.target.value)
                }
            />
            <Button onClick={useAttempt} disabled={attempts === 0}>
                Use
            </Button>
            <Button onClick={addAttempts}>Gain</Button>
        </div>
    );
}
