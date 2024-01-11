import React from 'react';
import { TodoBtnProps } from './TodoItem';
import EditModal from './EditModal';

export default function EditTodoBtn({ todo }: TodoBtnProps) {
    return <EditModal key={todo.todo_id} todo={todo} />;
}
