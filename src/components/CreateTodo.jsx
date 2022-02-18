import { useState } from "react";
import { v4 as uuid } from 'uuid';


const CreateTodo = ({setTodoList, todoList, toggled}) => {
    const [ todo, setTodo ] = useState('');
    const [ priority, setPriority ] = useState('5');
  
    const handleFormSubmit = ev => {
      ev.preventDefault();
      setTodoList([...todoList, {
        id: uuid(),
        todo: todo,
        priority: priority,
        toggled: toggled,
      }]);
      setTodo('');
      setPriority('5');
    }

    return(
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
            <div>
                <label>
                Tarea:
                <input 
                    type="text"
                    placeholder="task to do"
                    name="todo"
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
                </label>
            </div>
            <div>
                <label>
                Prioridad:
                <select   
                    name="priority"
                    value={priority}
                    // defaultValue={'5'}
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </label>
            </div>
            <button type="submit">Añadir</button>
        </form>
    );
};

export default CreateTodo;