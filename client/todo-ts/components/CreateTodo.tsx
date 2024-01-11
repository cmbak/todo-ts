import React, { useState } from 'react';

// Would this look better as a modal?
export default function CreateTodo() {
    const USERID_CHANGE = 1;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(getCurrentDate());
    const [formVisible, setFormVisible] = useState(false);
    const [showBtnVisible, setShowBtnVisible] = useState(true);

    function getCurrentDate() {
        const today = new Date();
        const month = `${today.getMonth() + 1}`.padStart(2, '0'); // getMonth() ret 0-11
        return `${today.getFullYear()}-${month}-${today.getDate()}`;
    }

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        await fetch(`http://localhost:3000/todos/${USERID_CHANGE}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
                dueDate: dueDate,
            }),
        });
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
                        name="description"
                        type="text"
                        placeholder="Finish notes from today..."
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {/* Change to text area? make sure that db char limit*/}
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
