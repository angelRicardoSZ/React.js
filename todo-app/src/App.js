import React from "react";
import { TodoCounter } from "./TodoCounter"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { TodoItem } from "./TodoItem"
import { CreateTodoButton } from "./CreateTodoButton"

//import logo from './logo.svg';
//import './App.css';
const todos = [
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
  return (
    <React.Fragment>
      
    <TodoCounter/>
    <TodoSearch/>
     
     
    <TodoList>
      {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed} /> ))}
    </TodoList>
    

    <CreateTodoButton/>
     
    </React.Fragment>
  );
}

export default App;
