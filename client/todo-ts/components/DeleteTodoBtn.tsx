import React from 'react';
import { TodoBtnProps } from './TodoItem';

export default function DeleteTodoBtn({ id }: TodoBtnProps) {
    return (
        <button className="todo-btn delete-btn" onClick={() => deleteTodo(id)}>
            DeleteTodoBtn
        </button>
    );
}
