import "../styles/components/TodoItem.scss";

export const TodoItem = ({ description, done, onToggleTodo, id }) => {
    return (
        <div
            className={
                done ? "todoItem d-flex todoItemCompleted" : "todoItem d-flex"
            }
        >
            <p
                onClick={() => onToggleTodo(id)}
                className={done ? "checkmark checkmarkDone" : "checkmark"}
            ></p>
            <p className={done ? "completedTask" : ""}>{description}</p>
        </div>
    );
};
