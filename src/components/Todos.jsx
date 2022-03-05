const viewTodoListLength = state => state.length;

const Todos = ({todoList, onToggle}) => {

    return(
        <>
            <div>        
            <h1>Todo List {viewTodoListLength(todoList)}</h1>
                {todoList.map(e => (
                    <li key={e.id}>
                    task: {e.todo}
                    <span> {e.priority}</span>
                    {/* <span> {e.id}</span> */}
                    <div>
                        <label>
                            <input type="checkbox" checked={e.toggled} onChange={() => onToggle(e.id)}/>
                            Hecho
                        </label>
                    </div>
                    </li>
                ))} 
            </div>
        </>
    );
}

export default Todos;