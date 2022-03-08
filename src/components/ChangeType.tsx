import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        setType(
            qType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    }
    return (
        <div>
            <Button onClick={changeType}>Change Type</Button>
            {qType === "multiple_choice_question" ? (
                <span>Multiple Choice</span>
            ) : (
                <span> Short Answer </span>
            )}
        </div>
    );
}
