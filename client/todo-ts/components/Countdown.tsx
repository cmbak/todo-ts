import React, { useEffect, useState } from 'react';
import { getCurrentDate } from '../dates';

interface CountdownProps {
    dueDate: string;
}

export default function Countdown({ dueDate }: CountdownProps) {
    const [daysLeft, setDaysLeft] = useState(0);
    const [isOverdue, setIsOverdue] = useState(false);

    function getDaysLeft(dueDate: string) {
        const currDate = new Date(getCurrentDate());
        const due = new Date(dueDate);
        // Check what happens for daylight savings
        currDate.setHours(0, 0, 0);
        due.setHours(0, 0, 0);

        const oneDay = 24 * 60 * 60 * 1000;
        return (due - currDate) / oneDay;
    }

    function getIsOverdue(daysLeft: number) {
        return daysLeft < 0 ? true : false;
    }

    useEffect(() => {
        setDaysLeft(getDaysLeft(dueDate));
        setIsOverdue(getIsOverdue(daysLeft));
    }, [daysLeft]); // Otherwise doesn't update classes or negative days

    return (
        <div className={`countdown ${isOverdue ? 'overdue' : 'normal-due'}`}>
            <p>
                {isOverdue
                    ? `Overdue by ${daysLeft * -1} days!`
                    : `Due in ${daysLeft} days`}
            </p>
        </div>
    );
}
