export function Stats ( { tasks } )
{
    if ( !tasks.length ) return <p className="stats"><em>Start Add Tasks To Your List 🚀</em></p>
    const numOfTasks = tasks.length
    const finishedTasks = tasks.filter( task => task.finished ).length
    const percentage = Math.round( ( finishedTasks / numOfTasks ) * 100 )
    return <footer className="stats">

        { percentage === 100 ? <em>You're done , Good Job🥰🥰</em> :
            <em>
                You Have { numOfTasks } Tasks In Your List🧐,
                And You Already Finish { finishedTasks } ( { percentage } %)💪
            </em>
        }
    </footer>
}