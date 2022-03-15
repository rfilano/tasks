import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [editMode, changeMode] = useState<boolean>(false);
    const [userName, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateMode(event: ChangeEvent) {
        changeMode(event.target.checked);
    }
    function updateIsStudent(event: ChangeEvent) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: ChangeEvent) {
        setUsername(event.target.value);
    }
    return (
        <div>
            <div>
                <div>
                    <h3>Edit Mode</h3>
                    <Form.Check
                        type="switch"
                        id="is-switch-on"
                        label="Edit Mode?"
                        checked={editMode}
                        onChange={updateMode}
                    />
                </div>
                <div>
                    {editMode && (
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateIsStudent}
                        />
                    )}
                </div>
                <div>
                    {editMode && (
                        <Form.Group controlId="changeTextBox">
                            <Form.Label>Change Name:</Form.Label>
                            <Form.Control
                                type="string"
                                value={userName}
                                onChange={updateName}
                            />
                        </Form.Group>
                    )}
                </div>
                <div>
                    {userName} {isStudent ? "is" : "is not"}
                    {" a student"}
                </div>
            </div>
        </div>
    );
}
