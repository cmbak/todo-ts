import React from 'react';
import DeleteTodoBtn from '../components/DeleteTodoBtn';
import EditModal from './EditModal';

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

export interface DeleteTodoBtnProps extends TodoBtnProps {
    deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo }: TodoItemProps) {
    return (
        <div className="todo-item">
            {/* <div className="todo-header">
                <h2 className="todo-title">{todo.name}</h2>
                <div className="todo-btn-container">
                    <EditModal key={todo.todo_id} todo={todo} />
                    <DeleteTodoBtn id={todo.todo_id} todo={todo} deleteTodo={deleteTodo}/>
                </div>
            </div>
            <div className="todo-info">
                {todo.description && (
                    <p className="todo-desc">{todo.description}</p>
                )}
                <p className="due-date">Due in X days</p>
            </div> */}
        </div>
    );
}
