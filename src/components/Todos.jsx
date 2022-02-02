
const Todos = ({todoList}) => {

    return(
        <>
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