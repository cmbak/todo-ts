import React, { useEffect } from 'react';
import { getCurrentDate } from '../dates';

interface CountdownProps {
    dueDate: string;
}

export default function Countdown({ dueDate }: CountdownProps) {
    function calcDaysLeft(dueDate) {
        console.log(getCurrentDate());
    }

    useEffect(() => {
        calcDaysLeft(dueDate);
    }, []);

    return <div>Due in {dueDate} Days</div>;
}
