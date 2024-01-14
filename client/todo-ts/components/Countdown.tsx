import React, { useEffect, useState } from 'react';
import { getDaysLeft } from '../dates';

interface CountdownProps {
    dueDate: string;
}

export default function Countdown({ dueDate }: CountdownProps) {
    const [daysLeft, setDaysLeft] = useState(0);
    const [isOverdue, setIsOverdue] = useState(false);

    function getIsOverdue(daysLeft: number) {
        return daysLeft < 0 ? true : false;
    }

    useEffect(() => {
        setDaysLeft(getDaysLeft(dueDate));
        setIsOverdue(getIsOverdue(daysLeft));
    }, [daysLeft]); // Otherwise doesn't update classes or negative days

    return (
        <div
            className={`countdown ${
                isOverdue
                    ? 'overdue'
                    : daysLeft == 1
                    ? 'due-soon'
                    : 'normal-due'
            }`}
        >
            <p>
                {isOverdue
                    ? `Overdue by ${daysLeft * -1} ${
                          daysLeft == 1 ? 'day' : 'days' // TODO turn into state? or something
                      }!`
                    : `Due in ${daysLeft} ${daysLeft == 1 ? 'day' : 'days'}`}
            </p>
        </div>
    );
}
