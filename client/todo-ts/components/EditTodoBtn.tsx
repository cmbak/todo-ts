import React from 'react';
import { TodoBtnProps } from './TodoItem';

export default function EditTodoBtn({ todo }: TodoBtnProps) {
    return (
        <>
            <button className="todo-btn edit-btn">Edit Todo</button>
            <div className="edit-btn-modal">
                <form action="">
                    <input type="text" name="name" defaultValue={todo.name} />
                    <input
                        type="text"
                        name="description"
                        defaultValue={todo.description}
                    />
                    {/* <input type="text" name="due-date" id="" /> */}
                </form>
            </div>
        </>
    );
}
