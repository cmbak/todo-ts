import React, { useRef } from 'react';
import { TodoBtnProps } from './TodoItem';

export default function EditTodoBtn({ todo }: TodoBtnProps) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const descRef = useRef<HTMLInputElement | null>(null);
    // todo date?

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        // console.log(event.currentTarget);
        console.log(nameRef.current?.value);
        console.log(descRef.current?.value);

        if (nameRef.current) {
            // nameRef.current.value = todo.name;
            console.log(`Test ${nameRef.current.value}`);
        }

        // Should update todo in db
        // PUT
        fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
            method: 'PUT',
            headers: { ContentType: 'application/json' },
            body: JSON.stringify({
                name: nameRef.current?.value,
                description: descRef.current?.value,
            }),
        });
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
