import React, {useState } from 'react'

export const TodoForm = ({addTodo}) => {
// export const TodoForm = () => {
    const [value, setValue] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('value',  value);

        addTodo(value)

        setValue("")
    }


  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input 
           className='todo-input' 
           type='text' 
           placeholder='Enter you task' 
           value={value} 
           onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
