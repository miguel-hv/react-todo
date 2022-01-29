import { useState } from "react";
import { v4 as uuid } from 'uuid';

const Todos = ({todoListInitialState}) => {

    console.log('mi lista inicial', todoListInitialState);
    console.log(todoListInitialState);

    const [ todo, setTodo ] = useState('');
    const [ priority, setPriority ] = useState('5');
    const [ todoList, setTodoList ] = useState(todoListInitialState);

    console.log('mi lista estado', todoList);

    const handleFormSubmit = ev => {
        ev.preventDefault();
        setTodoList([...todoList, {
          id: uuid(),
          todo: todo,
          priority: priority,
        }]);
      }

    return(
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
            <div>
            <label>
            Tarea:
            <input 
                type="text"
                placeholder="task to do"
                name="todo"
                value={todo.todo}
                onChange={e => setTodo(e.target.value)}
            />
            </label>
            </div>
            <div>
            <label>
            Prioridad:
            <select   
                name="priority"
                value={todo.priority}
                defaultValue={'5'}
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
            <div>        
                {todoList.map(e => (
                    <li key={e.id}>
                    task: {e.todo}
                    <span> {e.priority}</span>
                    {/* <span> {e.id}</span> */}
                    </li>
                ))} 
            </div>
        </>
    );
}

export default Todos;