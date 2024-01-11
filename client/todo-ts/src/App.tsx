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
    const [needRender, setNeedRender] = useState(false);

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
                // mode: 'no-cors',
            });
            // setNeedRender(true);
            console.log('filter successs!');

            setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo.todo_id !== id)
            );
            // setTodos([]);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error as string);
            }
            console.log('RRRR');
        }
        console.log(todos);
        setNeedRender((prevNeedRender) => !prevNeedRender);
    }

    useEffect(() => {
        getTodos();
        // setNeedRender(false);
    }, [JSON.stringify(todos), needRender]);

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
                                <EditModal key={todo.todo_id} todo={todo} />
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
