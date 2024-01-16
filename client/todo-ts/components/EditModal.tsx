import React, { useState } from 'react';
import { splitTDate } from '../dates';
import Modal from './Modal';
import HideModalBtn from './HideModalBtn';
import ShowModalBtn from './ShowModalBtn';

interface EditModalProps {
    todo: {
        todo_id: number;
        name: string;
        description?: string;
        created_at: string;
        due_date: string;
        user_id: number;
    };
    editTodo: (
        id: number,
        name: string,
        description: string,
        due_date: string
    ) => void;
}

export default function EditModal({ todo, editTodo }: EditModalProps) {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState(todo.name);
    const [description, setDescription] = useState(todo.description || ''); // Need ''?
    const [dueDate, setDueDate] = useState(splitTDate(todo.due_date));

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        await editTodo(todo.todo_id, name, description, dueDate);
        closeModal();
    }

    function handleCancelClick() {
        closeModal();
    }

    function handleShowClick() {
        setVisible(true);
    }

    function closeModal() {
        setVisible(false);
    }

    return (
        <>
            <div className="">
                <ShowModalBtn
                    className="todo-btn edit-btn"
                    text="Edit Todo"
                    onClick={handleShowClick}
                />
            </div>
            <Modal visible={visible}>
                <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
                    <h2>Editing {name}</h2>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                        type="date"
                        name="date"
                        value={dueDate}
                        // min={splitTDate(todo.due_date)}
                        onChange={(e) => setDueDate(splitTDate(e.target.value))}
                    />
                    <button className="edit-btn" type="submit">
                        Edit Todo
                    </button>
                    <HideModalBtn
                        text="Cancel"
                        className="cancel-btn"
                        onClick={handleCancelClick}
                    />
                </form>
            </Modal>
        </>
    );
}
