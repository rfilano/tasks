import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [response, setResponse] = useState<string>(options[0]);

    function updateResponse(event: ChangeEvent) {
        setResponse(event.target.value);
    }
    return (
        <div>
            <div>
                <h3>Multiple Choice Question</h3>
                <Form.Group controlId="multipleChoice">
                    <Form.Label>What color is my underwear?</Form.Label>
                    <Form.Select value={response} onChange={updateResponse}>
                        {options.map((choice: string) => (
                            <option key={choice} value={choice}>
                                {choice}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                Correct ?: {response === expectedAnswer ? "✔️" : "❌"}.
            </div>
        </div>
    );
}
