import React from 'react';
import EditTodoBtn from '../components/EditTodoBtn';
import DeleteTodoBtn from '../components/DeleteTodoBtn';

export default function TodoItem() {
    return (
        <div className="todo-item">
            <div className="todo-header">
                <h2 className="todo-title">Todo Name</h2>
                <div className="todo-btn-container">
                    <EditTodoBtn />
                    <DeleteTodoBtn />
                </div>
                <p className="todo-desc">Todo Description</p>
                <p className="due-date">Due in X days</p>
            </div>
        </div>
    );
}
