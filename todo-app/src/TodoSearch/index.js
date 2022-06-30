import React from "react";
import { TodoContext } from "../todoContext";
import "./TodoSearch.css";


function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);


    const onsearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }   
    return [
        <input className="TodoSearch"
         placeholder="Tarea por hacer"
         value={searchValue}
         onChange={onsearchValueChange}
         />,
        //  <p>{searchValue}</p>
    ]
}

export {TodoSearch};