import React, { useState } from 'react';
import { Todo } from '../src/App';

interface EditModalProps {
    todo: {
        todo_id: number;
        name: string;
        description?: string;
        created_at: string;
        due_date: string;
        user_id: number;
    };
}

export default function EditModal({ todo }: EditModalProps) {
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description || ''); // Need ''?
    // todo date?

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(`Edit Todo ${name} ${description}`);

        // await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name: name,
        //         description: description,
        //     }),
        // });
    }

    function handleCancelClick() {
        console.log('Close modal');
    }

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-content">
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
                        <button className="edit-todo-btn" type="submit">
                            Edit Todo
                        </button>
                        <button
                            className="cancel-btn"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
            <div className="overlay active"></div>
        </div>
    );
}
