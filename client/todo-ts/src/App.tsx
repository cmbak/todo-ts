import { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem';

// TODO Check if this is the correct way to do in ts

interface Todo {
    todo_id: number;
    name: string;
    description: string;
    created_at: string;
    due_date: string;
    user_id: number;
}

function App() {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    // TODO does this need to be async?
    async function getTodos() {
        // get req to localhost....
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

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="container">
            <h1 id="title">Todo</h1>
            {todos.map((todo) => {
                return <TodoItem key={todo.todo_id} />;
            })}
        </div>
    );
}

export default App;
