import React from 'react';
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
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <form>
                        <input type="text" name="name" value={todo.name} />
                        <input
                            type="text"
                            name="description"
                            value={todo.description}
                        />
                    </form>
                </div>
                <button className="edit-todo-btn">Edit Todo</button>
                <button className="cancel-btn">Cancel</button>
            </div>
            <div className="overlay active"></div>
        </>
    );
}
