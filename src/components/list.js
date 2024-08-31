import { useState } from "react"
import { Task } from "./task.js"

export
    function List ( { tasks, onDeleteTask, onToggleTask, setTasks } )
{
    const [ sortBy, setSortBy ] = useState( 'status' )
    let sortedTasks
    function handleClearList ()
    {
        const confirm = window.confirm( 'Are You Sure ? 🤔' )
        if ( confirm ) setTasks( [] )
    }
    if ( sortBy === "status" ) sortedTasks = tasks.slice().sort( ( a, b ) => Number( a.finished ) - Number( b.finished ) )
    if ( sortBy === "order" ) sortedTasks = tasks.slice().sort( ( a, b ) => Number( a.order ) - Number( b.order ) )
    return <div className="list">
        <ul>
            { sortedTasks.map( task => <Task task={ task } key={ task.id } onDeleteTask={ onDeleteTask } onToggleTask={ onToggleTask } /> ) }
        </ul>
        <div className="action">
            <select value={ sortBy } onChange={ e => setSortBy( e.target.value ) }>
                <option value="order">Sort By Order</option>
                <option value="status">Sort By Status</option>
            </select>
            <button onClick={ handleClearList }>clear</button>
        </div>
    </div>
}