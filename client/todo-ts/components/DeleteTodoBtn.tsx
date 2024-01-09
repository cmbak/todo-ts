import React from 'react';
import { TodoBtnProps } from './TodoItem';

export default function DeleteTodoBtn({ id }: TodoBtnProps) {
    async function deleteTodo(id: number) {
        try {
            await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE',
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    }

    return (
        <button
            className="todo-btn delete-btn"
            onClick={() => {
                deleteTodo(id);
                window.location.reload(); // TODO is there a better way of doing this? e.g. with state
            }}
        >
            Delete Todo
        </button>
    );
}
