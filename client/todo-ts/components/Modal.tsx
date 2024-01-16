import React from 'react';
import ShowModalBtn from './ShowModalBtn';

// TODO - Cancel button?

interface ModalProps {
    children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
    return (
        <>
            {/* <ShowModalBtn /> */}
            <div className={`modal-container`}>
                <div className="modal">
                    <div className="modal-content">{children}</div>
                </div>
                {/* {props.children} */}
                <div className="overlay active"></div>
            </div>
        </>
    );
}
