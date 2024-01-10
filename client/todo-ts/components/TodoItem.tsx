import React from 'react';
import EditTodoBtn from '../components/EditTodoBtn';
import DeleteTodoBtn from '../components/DeleteTodoBtn';
import { Todo } from '../src/App';

// TODO is this the correct way to do
interface TodoItemProps {
    todo: {
        todo_id: number;
        name: string;
        description?: string;
        created_at: string;
        due_date: string;
        user_id: number;
    };
}

export interface TodoBtnProps {
    id: number;
    todo: {
        todo_id: number;
        name: string;
        description?: string;
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
                    <EditTodoBtn id={todo.todo_id} todo={todo} />
                    <DeleteTodoBtn id={todo.todo_id} todo={todo} />
                </div>
            </div>
            <div className="todo-info">
                {todo.description && (
                    <p className="todo-desc">{todo.description}</p>
                )}
                <p className="due-date">Due in X days</p>
            </div>
        </div>
    );
}
