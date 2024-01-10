import React, { useState } from 'react';
import { TodoBtnProps } from './TodoItem';

export default function EditTodoBtn({ todo }: TodoBtnProps) {
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description || ''); // Need ''?
    // todo date?

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        // Should update todo in db
        // PUT
        fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
            method: 'PUT',
            headers: { ContentType: 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
