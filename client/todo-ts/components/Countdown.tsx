import React from 'react';
import { getDaysLeft } from '../dates';

interface CountdownProps {
    dueDate: string;
}

export default function Countdown({ dueDate }: CountdownProps) {
    const daysLeft = getDaysLeft(dueDate);
    const isOverdue = getIsOverdue(daysLeft);
    const dayText = Math.abs(daysLeft) == 1 ? 'day' : 'days';

    function getIsOverdue(daysLeft: number) {
        return daysLeft < 0 ? true : false;
    }

    return (
        <div
            className={`countdown ${
                isOverdue
                    ? 'overdue'
                    : daysLeft == 0
                    ? 'due-soon'
                    : 'normal-due'
            }`}
        >
            <p>
                {isOverdue
                    ? `Overdue by ${daysLeft * -1} ${dayText}!`
                    : daysLeft >= 1
                    ? `Due in ${daysLeft} ${dayText}`
                    : 'Due Today!'}
            </p>
        </div>
    );
}
