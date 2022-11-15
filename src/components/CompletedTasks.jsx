import "../styles/components/CompletedTasks.scss";
import { TodoItem } from "./TodoItem";
export const CompletedTasks = ({ completedTodos, onToggleTodo }) => {
    return (
        <>
            {completedTodos.length > 0 ? (
                //conditional rendering if competedTodos exists
                <>
                    <h1 className="mb-4 completedTitle">Completed</h1>
                    <section className="completedTasks mt-4">
                        {completedTodos.map((completed) => (
                            <TodoItem
                                key={completed.id}
                                {...completed}
                                onToggleTodo={onToggleTodo}
                            />
                        ))}
                    </section>
                </>
            ) : (
                <></>
            )}
        </>
    );
};
