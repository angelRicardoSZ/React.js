import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"

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

  
  return (
    <React.Fragment>
      
    <TodoCounter
      total={totalTodos}
      completed={completedTodos}
    />
    <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
     
     
    <TodoList>
      {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> ))}
    </TodoList>
    

    <CreateTodoButton/>
     
    </React.Fragment>
  );
}

export default App;
