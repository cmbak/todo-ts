import React from 'react';
import { Todo } from '../src/App';

interface EditModalProps {
    todo: Todo;
}

export default function EditModal({ todo }: EditModalProps) {
    return (
        <div className="modal">
            <form>
                <input type="text" name="name" value={todo.name} />
                <input
                    type="text"
                    name="description"
                    value={todo.description}
                />
            </form>
        </div>
    );
}
