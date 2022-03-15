import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [response, changeResponse] = useState<string>("");
    function answerQuestion(event: ChangeEvent) {
        changeResponse(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Control
                    type="text"
                    value={response}
                    onChange={answerQuestion}
                    placeholder="Enter answer here"
                />
            </div>
            {response === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
