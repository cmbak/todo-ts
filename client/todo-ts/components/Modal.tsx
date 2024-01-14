import React from 'react';

// TODO - Cancel button?

export default function Modal(props) {
    return (
        <div className={`modal-container`}>
            <div className="modal">
                <div className="modal-content">{props.children}</div>
            </div>
            {/* {props.children} */}
        </div>
    );
}
