import { TodoAdd, TodoList } from "./components";
import { useTodos } from "./hooks/useTodos";
import "./styles.scss";
export const TodoListApp = () => {
    const { todos, handleNewTodo } = useTodos();

    return (
        <div className="appWrapper">
            <h1 className="appTitle">My Tasks</h1>
            <TodoAdd onNewTodo={handleNewTodo} />
            <TodoList todos={todos} />
        </div>
    );
};
