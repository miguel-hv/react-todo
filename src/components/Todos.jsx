
const Todos = ({todoList, onToggle}) => {

    return(
        <>
            <div>        
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