import React from "react";
import { TodoContext } from "../todoContext";
import { TodoCounter } from "../TodoCounter"
import { TodoSearch } from "../TodoSearch"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { CreateTodoButton } from "../CreateTodoButton"
import {Modal} from "../Modal"

function AppUI() {

    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo
    } = React.useContext(TodoContext)


    return (
        <React.Fragment>
          
        <TodoCounter/>
        <TodoSearch/>
        
        <TodoList>
            {error && <p>Hubo un error</p>}
            {loading && <p>Estamos cargando, no desesperes</p>}
            {(!loading && !searchedTodos.lenngth ) && <p>Crea tu primer todo</p>}
            {searchedTodos.map(todo => (<TodoItem key={todo.text} text={todo.text} completed={todo.completed}  onComplete={()=>{completeTodo(todo.text)}} onDelete={()=>{deleteTodo(todo.text)}}   /> ))}
        </TodoList>
        
        <Modal>
          <p>{searchedTodos[0].text}</p>
        </Modal>
        

    
        <CreateTodoButton/>
         
        </React.Fragment>
      );
}

export {AppUI}