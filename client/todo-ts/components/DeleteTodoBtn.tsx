import React from 'react';
import { TodoBtnProps } from './TodoItem';

export default function DeleteTodoBtn(props: TodoBtnProps) {
    return <button className="todo-btn delete-btn">Delete Todo</button>;
}
