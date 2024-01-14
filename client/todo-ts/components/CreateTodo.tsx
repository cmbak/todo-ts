import React, { useState } from 'react';
import { getCurrentDate } from '../dates';

interface CreateTodoProps {
    createTodo: (
        id: number,
        name: string,
        description: string,
        dueDate: string
    ) => void;
}

// Would this look better as a modal?
export default function CreateTodo({ createTodo }: CreateTodoProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(getCurrentDate());
    const [formVisible, setFormVisible] = useState(false);
    const [showBtnVisible, setShowBtnVisible] = useState(true);

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const USERID_CHANGE = 1; // TODO - USER SYSTEM?

        console.log(description.length);
        await createTodo(USERID_CHANGE, name, description, dueDate);
    }

    function handleClick() {
        setShowBtnVisible(false);
        setFormVisible(true);
    }

    function clearForm() {
        setName('');
        setDescription('');
        setDueDate(getCurrentDate());
    }

    return (
        <div id="create-todo-container">
            {showBtnVisible && (
                <button id="show-create-form-btn" onClick={() => handleClick()}>
                    Create New Todo
                </button>
            )}
            {formVisible && (
                <form
                    id="create-todo-form"
                    action=""
                    onSubmit={(e) => {
                        handleSubmit(e);
                        setFormVisible(false);
                        setShowBtnVisible(true);
                    }}
                >
                    <label htmlFor="name">Title</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Finish Work"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        maxLength={255}
                        name="description"
                        type="text"
                        placeholder="Finish notes from today..."
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {/* Change to text area?*/}
                    <label htmlFor="date">Due Date</label>
                    <input
                        type="date"
                        name="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        min={getCurrentDate()}
                    />
                    <button type="submit" id="create-todo-submit">
                        Create Todo
                    </button>
                    <button
                        className="cancel-btn"
                        onClick={() => {
                            setFormVisible(false);
                            setShowBtnVisible(true);
                            clearForm();
                        }}
                        type="reset"
                    >
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
}
