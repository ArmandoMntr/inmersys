export const TodoList = ({ todos }) => {
    return (
        <section>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.description}</div>
            ))}
        </section>
    );
};
