import React from "react";
import ReactDOM from "react-dom/client";
import { TodoListApp } from "./TodoListApp";
import "./styles.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TodoListApp />
    </React.StrictMode>
);
