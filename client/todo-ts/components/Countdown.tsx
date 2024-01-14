import React, { useEffect } from 'react';
import { getCurrentDate } from '../dates';

interface CountdownProps {
    dueDate: string;
}

export default function Countdown({ dueDate }: CountdownProps) {
    function getDaysLeft(dueDate: string) {
        const currDate = new Date(getCurrentDate());
        const due = new Date(dueDate);
        // Check what happens for daylight savings
        currDate.setHours(0, 0, 0);
        due.setHours(0, 0, 0);

        const oneDay = 24 * 60 * 60 * 1000;
        return (due - currDate) / oneDay;
    }

    useEffect(() => {
        getDaysLeft(dueDate);
    }, []);

    return <div>Due in {getDaysLeft(dueDate)} Days</div>;
}
