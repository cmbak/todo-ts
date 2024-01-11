import React, { useState } from 'react';

export default function CreateTodo() {
    const USERID_CHANGE = 2;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        // POST
        // await fetch('http://localhost:3000/todos', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name: name,
        //         description: description,
        //         // dueDate?: dueDate, - default to today?
        //         userId: USERID_CHANGE,
        //     }),
        // });
    }

    return (
        <div id="create-todo-container">
            <form
                id="create-todo-form"
                action=""
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="text"
                    placeholder="Todo name"
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Todo Description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* Change to text area? make sure that db char limit*/}
                <button type="submit" id="create-todo-submit">
                    Create Todo
                </button>
            </form>
        </div>
    );
}
