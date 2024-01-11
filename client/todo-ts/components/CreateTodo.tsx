import React, { useState } from 'react';

export default function CreateTodo() {
    const USERID_CHANGE = 1;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(getCurrentDate());

    function getCurrentDate() {
        const today = new Date();
        const month = `${today.getMonth() + 1}`.padStart(2, '0'); // getMonth() ret 0-11
        return `${today.getFullYear()}-${month}-${today.getDate()}`;
    }

    async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        // console.log(getCurrentDate());
        // console.log(typeof getCurrentDate());
        // console.log(typeof '2022-01-11');
        // console.log(getCurrentDate() == '2022-01-11');

        // POST
        // await fetch(`http://localhost:3000/todos/${USERID_CHANGE}`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         name: name,
        //         description: description,
        //         dueDate: dueDate,
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
                <input type="date" name="date" min={getCurrentDate()} />
                <button type="submit" id="create-todo-submit">
                    Create Todo
                </button>
            </form>
        </div>
    );
}
