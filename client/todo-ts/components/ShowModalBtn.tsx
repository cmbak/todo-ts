import React from 'react';

interface ShowModalBtnProps {
    text: string;
    className?: string;
    onClick: () => void;
    id?: string;
}

export default function ShowModalBtn({
    text,
    className,
    id,
    onClick,
}: ShowModalBtnProps) {
    return (
        <button className={className} onClick={onClick} id={id}>
            {text}
        </button>
    );
}
