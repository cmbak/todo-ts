import React from 'react';

interface ShowModalBtnProps {
    text: string;
    className: string;
    onClick: () => void;
}

export default function ShowModalBtn({
    text,
    className,
    onClick,
}: ShowModalBtnProps) {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}
