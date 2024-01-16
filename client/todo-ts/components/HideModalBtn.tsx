import React from 'react';

interface HideModalBtnProps {
    text: string;
    className: string;
    onClick: () => void;
}

// Created separate component since it's easier to enforce having an onClick prop

export default function HideModalBtn({
    text,
    className,
    onClick,
}: HideModalBtnProps) {
    return (
        <button type="button" className={className} onClick={onClick}>
            {text}
        </button>
    );
}
