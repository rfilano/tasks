import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [response, setResponse] = useState<string>(options[0]);

    function updateResponse(event: ChangeEvent) {
        setResponse(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
                <Form.Group controlId="multipleChoice">
                    <Form.Label>What letter am I thinking of?</Form.Label>
                    <Form.Select value={response} onChange={updateResponse}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {response === expectedAnswer
                    ? "Your answer is correct ✔️"
                    : " Your answer is not correct❌"}
                .
            </div>
        </div>
    );
}
