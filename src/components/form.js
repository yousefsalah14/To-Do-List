import { useState } from "react";

export function Form ( { onAddTask } )
{
    const [ desc, setDesc ] = useState( "" )
    const [ order, setOrder ] = useState( 1 )



    function handleSubmit ( event )
    {
        event.preventDefault()
        if ( !desc ) return;
        const newTask = { order, desc, finished: false, id: Date.now() }
        setDesc( '' )
        setOrder( 1 )
        onAddTask( newTask )
    }
    return <form className="add-form" onSubmit={ handleSubmit }>
        <h3>What You Need To Finish ?🤔</h3>
        <select value={ order } onChange={ ( e ) => setOrder( Number( e.target.value ) ) }>
            { Array.from( { length: 10 }, ( _, i ) => i + 1 ).map( ( i ) => <option value={ i } key={ i }>{ i }</option> ) }

        </select>
        <input type="text" placeholder="task..." value={ desc } onChange={ ( e ) => setDesc( e.target.value ) } />
        <button>Add</button>
    </form>
}