import React from 'react';

interface HideModalBtnProps {
    text: string;
    className: string;
}

export default function HideModalBtn({ text, className }: HideModalBtnProps) {
    return (
        <button type="button" className={className}>
            {text}
        </button>
    );
}
