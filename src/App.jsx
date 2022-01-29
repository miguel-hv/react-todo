import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';


import Todos from './components/Todos';

import './App.scss';

const todoListInitialState = [
  {id: 1,
  todo: 'esta es mi primera tarea',
  priority: 5},
  {id: 2,
  todo: 'esta es mi segunda tarea',
  priority: 5},
  ];

// const todoInitialState = {
//   id:'',
//   todo:'hola',
//   priority:'',
// }

function App() {



  // const addTodo = (task) => {
  //   console.log('tarea a;adida'+task);
  //   setTodos([...todos, task]);
  //   console.log(todos);
  // }



  return (
    <Todos todoListInitialState={todoListInitialState}/>
  );
}

export default App;
