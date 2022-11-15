import { useEffect, useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

const init = () => {
    //getting items in localStorage the first time
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    // saving todos in localStorage everytime a change ocurrs
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    //filtering todos
    const unfinishedTodos = todos.filter((todo) => !todo.done);
    const completedTodos = todos.filter((todo) => todo.done);

    const handleNewTodo = (todo) => {
        // check if the new todo already exists
        if (
            todos
                .map((item) => item.description.toLowerCase())
                .includes(todo.description.toLowerCase())
        )
            return;

        const action = {
            type: "add todo",
            payload: todo,
        };
        dispatch(action);
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: "toggle todo",
            payload: id,
        };
        dispatch(action);
    };

    return {
        handleNewTodo,
        handleToggleTodo,
        completedTodos,
        unfinishedTodos,
    };
};
