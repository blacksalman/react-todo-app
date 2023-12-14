import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('e.target value', e.target.value);
        console.log('value',  value);

        editTodo(value, task.id)

        setValue("")
    }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input 
           className='todo-input' 
           type='text' 
           placeholder='Update you task' 
           value={value} 
           onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
