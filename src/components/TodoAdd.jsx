import Button from "react-bootstrap/Button";
import arrowsvg from "../assets/arrow_right.svg";
import { useForm } from "../hooks/useForm";
import "../styles/components/TodoAdd.scss";

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onResetForm, onInputChange } = useForm({
        description: "",
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        // checking if the input is not empty
        if (description.length <= 1) return;

        const todo = {
            id: new Date().getTime(),
            done: false,
            description,
        };
        // sending todo to <TodoListApp/>
        onNewTodo(todo);
        onResetForm();
    };
    return (
        <div className="todoAddWrapper">
            <form
                className="todoAddForm mb-5 mt-4 align-items-center"
                onSubmit={onFormSubmit}
            >
                <input
                    placeholder="Add new task"
                    className="todoAddInput"
                    onChange={onInputChange}
                    name="description"
                    value={description}
                />
                <Button type="submit" className="todoAddButton">
                    <img src={arrowsvg} className="arrowsvg" />
                </Button>
            </form>
        </div>
    );
};
