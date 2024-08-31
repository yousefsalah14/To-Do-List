import { useState } from "react";
import { Logo } from "./components/logo.js";
import { Form } from "./components/form.js";
import { List } from "./components/list.js";
import { Stats } from "./components/stats.js";

export default function App ()
{
  const [ tasks, setTasks ] = useState( [] )

  function handleAddTasks (task)
  {
    const orderExists = tasks.some(t => t.order === task.order);
    if (orderExists) {
        alert(`Task with order ${task.order} already exists.`);
        return; 
    }
    setTasks( tasks => [ ...tasks, task ] )

  }
  function handleDeleteTask (id)
  {
    setTasks(tasks=>tasks.filter(task=> task.id !== id))
  }
  function handleToggleTask (id)
  {
    setTasks(tasks=>tasks.map(task=> task.id === id ? {...task, finished : !task.finished} : task))
  }
  return <div className="app">
    <Logo />
    <Form onAddTask = {handleAddTasks} />
    <List tasks={ tasks } onDeleteTask={ handleDeleteTask } onToggleTask={ handleToggleTask } setTasks={ setTasks} />
    <Stats tasks={tasks}  />
  </div>
}




