import React from "react";
import { AppUI } from "./AppUI";

//import logo from './logo.svg';
//import './App.css';
const defaultTodos = [
  {
    text: "Cortar cebolla", completed:false
  },
  {
    text: "Tarea 2", completed:true
  },
  {
    text: "Tarea 3", completed:true
  }
]


function App() {
  const  [todos, setTodos] = React.useState(defaultTodos);
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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
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
