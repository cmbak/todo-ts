import React from 'react';

// TODO - Cancel button?

interface ModalProps {
    children: React.ReactNode;
    visible: boolean;
}

export default function Modal({ children, visible }: ModalProps) {
    return (
        <div className={`modal-container`}>
            <div className="modal">
                <div className="modal-content">{children}</div>
            </div>
            {/* {props.children} */}
        </div>
    );
}
