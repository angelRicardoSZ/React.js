import React from "react";
import { AppUI } from "./AppUI";

//import logo from './logo.svg';
//import './App.css';
// const defaultTodos = [
//   {
//     text: "Cortar cebolla", completed:false
//   },
//   {
//     text: "Tarea 2", completed:true
//   },
//   {
//     text: "Tarea 3", completed:true
//   }
// ]


function App() {
  const localStorageTodos = localStorage.getItem("Todos_V1");
  let parsedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("Todos_V1",JSON.stringify([]));
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const  [todos, setTodos] = React.useState(parsedTodos);
  const completedTodos = todos.filter(todo => !!todo.completed ).length;
  const totalTodos = todos.length;
  let searchedTodos = [];
  const [searchValue, setSearchValue] = React.useState("")
  if (!searchValue >=1 ) {
    searchedTodos = todos

  } else {
    searchedTodos = todos.filter( 
      todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
      }
    )
    
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("Todos_V1", stringifiedTodos);
    setTodos(newTodos)
  };


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo = {deleteTodo}
      searchedTodos = {searchedTodos}
      />
  );

  
}

export default App;
