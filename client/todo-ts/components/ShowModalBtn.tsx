import React from 'react';

interface ShowModalBtnProps {
    text: string;
    className: string;
}

export default function ShowModalBtn({ text, className }: ShowModalBtnProps) {
    return <button className={className}>{text}</button>;
}
