import React from 'react';
import EditTodoBtn from '../components/EditTodoBtn';
import DeleteTodoBtn from '../components/DeleteTodoBtn';

// TODO is this the correct way to do
interface TodoItemProps {
    todo: {
        todo_id: number;
        name: string;
        description: string;
        created_at: string;
        due_date: string;
        user_id: number;
    };
}

export default function TodoItem({ todo }: TodoItemProps) {
    return (
        <div className="todo-item">
            <div className="todo-header">
                <h2 className="todo-title">{todo.name}</h2>
                <div className="todo-btn-container">
                    <EditTodoBtn />
                    <DeleteTodoBtn />
                </div>
            </div>
            <div className="todo-info">
                <p className="todo-desc">{todo.description}</p>
                <p className="due-date">Due in X days</p>
            </div>
        </div>
    );
}
