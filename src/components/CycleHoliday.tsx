import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday =
        | "Holiday: 🎄"
        | "Holiday: 👻"
        | "Holiday: ✝️"
        | "Holiday: 💕"
        | "Holiday: 🎇";

    const alphabetical: Record<holiday, holiday> = {
        "Holiday: 🎄": "Holiday: ✝️",
        "Holiday: ✝️": "Holiday: 👻",
        "Holiday: 👻": "Holiday: 🎇",
        "Holiday: 🎇": "Holiday: 💕",
        "Holiday: 💕": "Holiday: 🎄"
    };
    const chronological: Record<holiday, holiday> = {
        "Holiday: 💕": "Holiday: ✝️",
        "Holiday: ✝️": "Holiday: 🎇",
        "Holiday: 🎇": "Holiday: 👻",
        "Holiday: 👻": "Holiday: 🎄",
        "Holiday: 🎄": "Holiday: 💕"
    };
    const [hday, setHoliday] = useState<holiday>("Holiday: 💕");
    function alphabeticalSort(): void {
        const nextHoliday = alphabetical[hday];
        setHoliday(nextHoliday);
    }
    function chronologicalSort(): void {
        const nextHoliday = chronological[hday];
        setHoliday(nextHoliday);
    }
    return (
        <div>
            <span>{hday}</span>
            <Button onClick={alphabeticalSort}>Next Holiday in Alphabet</Button>
            <Button onClick={chronologicalSort}>Next Holiday in Year</Button>
        </div>
    );
}
