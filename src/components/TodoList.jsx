import { TodoItem } from "./TodoItem";
import "../styles/components/TodoList.scss";
export const TodoList = ({ todos, onToggleTodo }) => {
    return (
        <section className="todoList">
            {todos.map((todo) => (
                <TodoItem key={todo.id} {...todo} onToggleTodo={onToggleTodo} />
            ))}
        </section>
    );
};
