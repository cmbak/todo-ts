import React from 'react';
import { TodoBtnProps } from './TodoItem';

export default function EditTodoBtn({ id }: TodoBtnProps) {
    return <button className="todo-btn edit-btn">Edit Todo</button>;
}
