import { TodoAdd, TodoList, CompletedTasks } from "./components";
import { useTodos } from "./hooks/useTodos";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/TodoListApp.scss";
export const TodoListApp = () => {
    //destructuring functions and arrays to pass by props
    const { unfinishedTodos, handleToggleTodo, handleNewTodo, completedTodos } =
        useTodos();

    return (
        <div className="appWrapper mx-4 mt-4">
            <h1 className="appTitle mt-4">My Tasks</h1>
            <TodoAdd onNewTodo={handleNewTodo} />
            <TodoList todos={unfinishedTodos} onToggleTodo={handleToggleTodo} />
            <CompletedTasks
                completedTodos={completedTodos}
                onToggleTodo={handleToggleTodo}
            />
        </div>
    );
};
