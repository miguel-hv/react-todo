import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import { useReducer } from 'react';



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
 
const ADD_TODO = 'ADD_TODO';

const reducer = (todos = todoListInitialState(), action={}) => {
  switch(action.type){
    case ADD_TODO:
        return [action.payload, ...todos]
    default: 
      return todos;
  }
}

function App() {

  // const [ todoList, setTodoList ] = useState(todoListInitialState);
  const [ toggled, setToggled ] = useState(false);
  const [ todos, dispatch ] = useReducer(reducer, reducer());


  const toggleTodo = id => {
    
    // const newTodos = todoList.map(todo => {
    //   switch(todo.id){
    //     case id: 
    //       return { ...todo, toggled: !todo.toggled };
    //     default:
    //       return todo;
    //   }
    // });

    // setTodoList(newTodos);
  }

  const addTodo = todo => {
    Object.assign(todo,{
      id: uuid(),
      toggled: false
    });

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  }


  return (
    <div>
      {/* <CreateTodo setTodoList={setTodoList} todoList={todoList} toggled={toggled}/> */}
      <CreateTodo onSubmit={addTodo}/>
      {/* <Todos todoList={todoList} onToggle={toggleTodo}/> */}
      <Todos/>
    </div>
  );
}

export default App;
