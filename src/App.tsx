import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "gray" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1
                style={{
                    border: "2px dotted black",
                    padding: "3px",
                    backgroundColor: "pink"
                }}
            >
                Introduction to Software Engineering Tasks
            </h1>
            <img
                src="https://pyxis.nymag.com/v1/imgs/0ce/446/f9a3bd4b0d9165d83672a4b53d1a539aa5-lamps-2.2x.rsocial.w600.jpg"
                alt="Lamp"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                Types of Lamps:
                <ul className="list-unstyled">
                    <li>Lamp</li>
                    <li>Big Lamp</li>
                    <li>Small Lamp</li>
                    <li>Medium Lamp</li>
                    <li>
                        Antique French Victorian Vaseline Uranium Glass Lamp
                    </li>
                </ul>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    border: "1px solid black"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    border: "1px solid black"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                February 08, 2022 03:20:34 | Sucessfully edited by Rosemarie
                Filano
            </p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
