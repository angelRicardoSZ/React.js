import React from "react";
import "./TodoCounter.css";
// const estilos = {
//     color: "red",
//     backgroundColor: "Yellow"
// }

function TodoCounter() {
    return (
        // <h2 style={estilos}>Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>

    )
}

export {TodoCounter};