import React from "react";
import { TodoContext } from "../todoContext";
import "./TodoCounter.css";
// const estilos = {
//     color: "red",
//     backgroundColor: "Yellow"
// }

function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        // <h2 style={estilos}>Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>

    )
}

export {TodoCounter};