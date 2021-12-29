import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';
import './App.scss';

const initialState = [
  {id: 1,
  todo: 'esta es mi primera tarea',
  priority: 5},
  {id: 2,
  todo: 'esta es mi segunda tarea',
  priority: 5},
  ];

function App() {

  const [ todos, setTodos ] = useState(initialState);

  const addTodo = (task) => {
    console.log('tarea a;adida'+task);
  }

  return (
    <>
      <TextareaAutosize
        id="addTodo"
        name="addTodo"
        aria-label="empty textarea"
        placeholder="Tarea"
        minRows={3}
        maxRows={6}
        style={{ width: 200 }}
      />
      <Button variant='contained' onClick={addTodo}>Añadir tarea</Button>
      <div>
        {todos.map(e => (
          <li key={e.id}>
            task: {e.todo}
          </li>
        ))}
      </div>
    </>
  );
}

export default App;
