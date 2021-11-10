import React, { useState, useEffect } from "react";
import './App.css';

//Componentes
import Header from "./componentes/Header.jsx";
import Loader from "./componentes/Loader.jsx";
import Todo from "./componentes/Todo";
import Menu from "./componentes/Menu";

// STYLES
import "./App.css";

function App() {
//STATE
const [todoList , setTodolist] = useState(null);
const [viewTotal, setViewTotal ] = useState(true);
const [viewCompleted, setViewCompleted] = useState(false);
const [viewReset, setviewReset] = useState(false);

//EFFECT
useEffect(()=>{
  const HandleTodoList = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    const resultTodoList = result.slice(0 ,20);
    setTodolist(resultTodoList);  
  };
  HandleTodoList();
}, []);

// FUNCIONES

const handleAllView = () => {
  setViewTotal(true);
  setViewCompleted(false);
  setviewReset(false);
}
const handleCompletedView = () => {
  setViewTotal(false);
  setViewCompleted(true);
  setviewReset(false);
 
}

const handleResetView = () => {
  setViewTotal(false);
  setViewCompleted(false);
  setviewReset(true);
}

const handleCompleteTodo = (id) => {
  const stateVariable = todoList.map(todo => todo.id === id ? {...todo, completed:!todo.completed}: todo);
  setTodolist(stateVariable);
}
  return (
    <>
    <div className="App">
     
<Header />
<Menu handleAllView={handleAllView} handleCompletedView={handleCompletedView} 
handleResetView={handleResetView}/>

{ viewTotal === true &&(

todoList && todoList.length > 0 ? (todoList.map(singleTodo => (
<Todo key={singleTodo.id} title={singleTodo.title} status={singleTodo.completed} handleCompleteTodo={handleCompleteTodo} id={singleTodo.id}/>
  ))):(<Loader />))
}

{  viewCompleted === true && (

todoList && todoList.length > 0 ? (
  (todoList.filter(ele=>ele.completed===false)).map(singleTodo => (
<Todo key={singleTodo.id} title={singleTodo.title} status={singleTodo.completed} handleCompleteTodo={handleCompleteTodo} id={singleTodo.id}/> ))):(<Loader />))
}

{  viewReset === true && (

todoList && todoList.length > 0 ? (
  
  (todoList.filter(ele=>ele.completed===true)).map(singleTodo => (
<Todo key={singleTodo.id} title={singleTodo.title} status={singleTodo.completed} handleCompleteTodo={handleCompleteTodo} id={singleTodo.id}/> ))):(<Loader />))
}

</div>
    </>
  );
}

export default App;
