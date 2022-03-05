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
 

const AddTodo = id => ({ 
  type: 'ADD_TODO',
  payload: id,
});
const ToggleTodo = todo => ({ 
  type: 'TOGGLE_TODO',
  payload: todo,
});

const updateTodoToggles = (todos, { payload }={}) => todos.map(todo => {
  if (todo.id === payload) {
    return { ...todo, toggled : !todo.toggled }
  }
  return todo;
});

const reducer = (todos = todoListInitialState, action={}) => {
  switch(action.type){
    case AddTodo().type:
        return [Object.assign({},{ ...action.payload }, { id: uuid(), toggled: false }) , ...todos];
    case ToggleTodo().type:
        return updateTodoToggles(todos,action);
    default: 
      return todos;
  }
}

function App() {

  // const [ todoList, setTodoList ] = useState(todoListInitialState);
  const [ toggled, setToggled ] = useState(false);
  const [ todos, dispatch ] = useReducer(reducer, reducer());


  const toggleTodo = id => dispatch(ToggleTodo(id));
  const addTodo = todo => dispatch(AddTodo(todo));


  return (
    <div>
      {/* <CreateTodo setTodoList={setTodoList} todoList={todoList} toggled={toggled}/> */}
      <CreateTodo onSubmit={addTodo}/>
      {/* <Todos todoList={todoList} onToggle={toggleTodo}/> */}
      <Todos todoList={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
