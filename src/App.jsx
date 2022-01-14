import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';
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
  const [ todo, setTodo ] = useState('');
  const [ priority, setPriority ] = useState('');

  // const addTodo = (task) => {
  //   console.log('tarea a;adida'+task);
  //   setTodos([...todos, task]);
  //   console.log(todos);
  // }
  const handleFormSubmit = ev => {
    ev.preventDefault();
    setTodoList([...todoList, {
      id: 0,
      todo: todo,
      priority: priority,
    }]);
  }


  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* <TextareaAutosize
          id="addTodo"
          name="addTodo"
          aria-label="empty textarea"
          placeholder="Tarea"
          minRows={3}
          maxRows={6}
          style={{ width: 200 }}
        />
        <Button variant='contained' onClick={addTodo}>Añadir tarea</Button> */}
        <input 
          type="text"
          placeholder="task to do"
          name="todo"
          value={todo.todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input    //cambiar a selector
          type="text"
          name="priority"
          value={todo.priority}
          onChange={e => setPriority(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>
        <div>
          {todoList.map(e => (
            <li key={e.id}>
              task: {e.todo}
            </li>
          ))}
        </div>
    </>
  );
}

export default App;
