import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';



import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';

import './App.scss';

const todoListInitialState = [
  {
    id: 1,
    todo: 'esta es mi primera tarea',
    priority: 5,
    toggled: 0,
  },
  {
    id: 2,
    todo: 'esta es mi segunda tarea',
    priority: 5,
    toggled: 0,
  },
  ];

// const todoInitialState = {
//   id:'',
//   todo:'hola',
//   priority:'',
// }

function App() {

  const [ todoList, setTodoList ] = useState(todoListInitialState);
  const [ toggled, setToggled ] = useState(false);


  const toggleTodo = id => {
    
    const newTodos = todoList.map(todo => {
      switch(todo.id){
        case id: 
          return { ...todo, toggled: !todo.toggled };
        default:
          return todo;
      }
    });

    setTodoList(newTodos);
  }


  return (
    <div>
      <CreateTodo setTodoList={setTodoList} todoList={todoList} toggled={toggled}/>
      <Todos todoList={todoList} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
