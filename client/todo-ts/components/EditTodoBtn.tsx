import React, { useRef } from 'react';
import { TodoBtnProps } from './TodoItem';

export default function EditTodoBtn({ todo }: TodoBtnProps) {
    const nameRef = useRef(null); // could this be todo.name?
    const descRef = useRef(null);
    // todo date?

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event.currentTarget);
        console.log(nameRef);
        console.log(descRef);
        // Get values from form! - useRef? useState?
    }

    return (
        <>
            <button className="todo-btn edit-btn">Edit Todo</button>
            <div className="edit-btn-modal">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        defaultValue={todo.name}
                        ref={nameRef}
                    />
                    <input
                        type="text"
                        name="description"
                        defaultValue={todo.description}
                        ref={descRef}
                    />
                    <button type="submit" className="edit-btn">
                        Edit Todo
                    </button>
                    {/* <input type="text" name="due-date" id="" /> */}
                </form>
            </div>
        </>
    );
}
