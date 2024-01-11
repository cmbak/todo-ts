// TODO is this the correct way to do
interface DeleteTodoBtnProps {
    id: number;
    todo: {
        todo_id: number;
        name: string;
        description?: string;
        created_at: string;
        due_date: string;
        user_id: number;
    };
    deleteTodo: (id: number) => void;
}

import React from 'react';

export default function DeleteTodoBtn({ id, deleteTodo }: DeleteTodoBtnProps) {
    return (
        <button className="todo-btn delete-btn" onClick={() => deleteTodo(id)}>
            Delete Todo
        </button>
    );
}
