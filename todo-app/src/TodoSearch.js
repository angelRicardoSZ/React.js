import React from "react";
import "./TodoSearch.css";


function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState("")


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
         <p>{searchValue}</p>
    ]
}

export {TodoSearch};