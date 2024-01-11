import React from 'react';

export default function CreateTodo() {
    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <div id="create-todo-container">
            <form
                id="create-todo-form"
                action=""
                onSubmit={(e) => handleSubmit(e)}
            >
                <input type="text" placeholder="Todo name" required />
                <input type="text" placeholder="Todo Description" />{' '}
                {/* Change to text area? make sure that db char limit*/}
                <button type="submit" id="create-todo-submit">
                    Create Todo
                </button>
            </form>
        </div>
    );
}
