import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function changeMode() {
        setMode(!mode);
    }
    function updateStudent(event: ChangeEvent) {
        setStudent(event.target.checked);
    }
    function changeName(event: ChangeEvent) {
        const name = event.target.value;
        setUsername(name);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check type="switch" checked={mode} onChange={changeMode} />
            <Form.Control
                type="name"
                value={username}
                onChange={changeName}
                placeholder="Enter your name"
                disabled={!mode}
            />
            <span>Are you a student?</span>
            <Form.Check
                type="checkbox"
                checked={isStudent}
                onChange={updateStudent}
                disabled={!mode}
            />
            <span>
                {username} is {isStudent ? "a student." : "not a student."}
            </span>
        </div>
    );
}
