import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';



import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';

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

  const [ todoList, setTodoList ] = useState(todoListInitialState);


  return (
    <div>
      <CreateTodo setTodoList={setTodoList} todoList={todoList}/>
      <Todos todoList={todoList}/>
    </div>
  );
}

export default App;
