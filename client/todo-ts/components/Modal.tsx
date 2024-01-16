import React from 'react';

// TODO - Cancel button?

interface ModalProps {
    children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return (
        <div className={`modal-container`}>
            <div className="modal">
                <div className="modal-content">{children}</div>
            </div>
            {/* {props.children} */}
            <div className="overlay active"></div>
        </div>
    );
}
