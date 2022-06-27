import React from "react";
import {TodoProvider} from "../todoContext"
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
  

  // console.log("Render (antes del use effect)")
  // React.useEffect(()=>{
  //   console.log("Render use effect)")
  // }, [totalTodos])


  // console.log("Render (luego del use effect)")

  return (
    <TodoProvider>
          <AppUI/>
    </TodoProvider>
  );

  
}

export default App;
