import './App.css';
import React, { useState, useEffect } from 'react';
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import axios from 'axios';
import './index.css';

//const array = [{description: "tarefa UM"},{description: "tarefa DOIS"},{description: "tarefa TRÊS"}]



function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('')

  async function getTodos(){
    const response = await axios.get("http://localhost:3001/tasks");
    setTodos(response.data)
  }

  async function clearField(){
    setValue('');
  }

  async function createTodo(){ 
    const reponse = await axios.post("http://localhost:3001/tasks", {description: value});

    if(!value) return alert('Preencha o campo')

    getTodos();
    clearField()
  }

  async function deleteTodo(todo){
    await axios.delete(`http://localhost:3001/tasks/${todo.id}`);
    getTodos();
  }
  
  const Todos = ({todos}) => {
    return (
      <div className='todos'>
        {todos.map(todo => {
          return (
            <div className='todo'>
              <input type='checkbox'></input>
              <p>{todo.description}</p>
              <button><AiOutlineEdit></AiOutlineEdit></button>
              <button onClick={() => deleteTodo(todo)}><AiOutlineDelete></AiOutlineDelete></button>
            </div>
          )
        })}
      </div>
    )
  }
  

  useEffect(() => { //simula o componentDidMount
    getTodos();
  }, [])

  return (
    <div className="App">
      <header className='container'>
        <div className='header'>Let's get him!!</div>
        <Todos todos={todos}></Todos>
      <input className='inputName' placeholder='Digite aqui...' value={value} onChange={(e) => {
        setValue(e.target.value)
      }}></input>
      <button className='newTaskButton' onClick={createTodo}> + new task</button>
      </header>
    </div>
  );
}

export default App;
