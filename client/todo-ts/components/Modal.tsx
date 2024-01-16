import React from 'react';
interface ModalProps {
    children: React.ReactNode;
    visible: boolean;
}

export default function Modal({ children, visible }: ModalProps) {
    return (
        <div className={`modal-container ${visible === false ? 'hidden' : ''}`}>
            <div className="modal">
                <div className="modal-content">{children}</div>
            </div>
            <div className="overlay active"></div>
        </div>
    );
}
