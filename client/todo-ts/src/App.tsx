import { useEffect, useState } from 'react';
// import TodoItem from '../components/TodoItem';
import CreateTodo from '../components/CreateTodo';
import EditModal from '../components/EditModal';
import DeleteTodoBtn from '../components/DeleteTodoBtn';

// TODO Check if this is the correct way to do in ts

export interface Todo {
    todo_id: number;
    name: string;
    description: string; // FIXME should be optio!
    created_at: string;
    due_date: string;
    user_id: number;
}

function App() {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    // TODO does this need to be async?
    async function getTodos() {
        console.log('bop');
        try {
            const response = await fetch('http://localhost:3000/todos/'); // TODO correct way of using it
            const result = await response.json();
            setTodos(result);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error as string); // FIXME Should I even bother with this? What if this throws an error?
            }
        }
    }

    async function deleteTodo(id: number) {
        console.log(todos);
        console.log(id);
        try {
            await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE',
            });
            getTodos();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error as string);
            }
        }
    }

    async function editTodo(id: number, name: string, description: string) {
        await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                description: description,
            }),
        });

        getTodos();
    }

    useEffect(() => {
        getTodos();
    }, [JSON.stringify(todos)]); // TODO Find better solution

    return (
        <div className="container">
            <h1 id="title">Todo</h1>
            <CreateTodo />
            <div className="todo-container">
                {todos.map((todo) => (
                    <div key={todo.todo_id} className="todo-item">
                        <div className="todo-header">
                            <h2 className="todo-title">{todo.name}</h2>
                            <div className="todo-btn-container">
                                <EditModal
                                    key={todo.todo_id}
                                    todo={todo}
                                    editTodo={editTodo}
                                />
                                <DeleteTodoBtn
                                    id={todo.todo_id}
                                    todo={todo}
                                    deleteTodo={deleteTodo}
                                />
                            </div>
                        </div>
                        <div className="todo-info">
                            {todo.description && (
                                <p className="todo-desc">{todo.description}</p>
                            )}
                            <p className="due-date">Due in X days</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
