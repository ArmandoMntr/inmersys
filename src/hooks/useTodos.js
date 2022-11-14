import { useReducer } from "react";
import { todoReducer } from "../helpers/todoReducer";

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const handleNewTodo = (todo) => {
        const action = {
            type: "add todo",
            payload: todo,
        };
        dispatch(action);
    };

    return { handleNewTodo, todos };
};
