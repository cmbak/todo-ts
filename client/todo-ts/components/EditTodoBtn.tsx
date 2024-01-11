import React, { useState } from 'react';
import { TodoBtnProps } from './TodoItem';
import EditModal from './EditModal';

export default function EditTodoBtn({ todo }: TodoBtnProps) {
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description || ''); // Need ''?
    // todo date?
    const [showModal, setShowModal] = useState(false);

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        await fetch(`http://localhost:3000/todos/${todo.todo_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        });
    }

    function handleClick() {
        console.log(todo.todo_id);
        setShowModal((prevShowModal) => !prevShowModal);
    }

    return (
        <>
            <button className="todo-btn edit-btn" onClick={handleClick}>
                Edit Todo
            </button>
            {/* TODO make modal separate component? */}
            {showModal && <EditModal todo={todo} />}
        </>
    );
}
