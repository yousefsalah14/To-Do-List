export function Task ( { task, onDeleteTask, onToggleTask } )
{

    return <li>
        <input type="checkbox" value={ task.finished } onChange={ () => onToggleTask( task.id ) } />
        <span style={ task.finished ? { textDecoration: "line-through" } : {} }>
            { task.order }- { task.desc } </span>
        <button onClick={ () => onDeleteTask( task.id ) }>❌</button>
    </li>
}