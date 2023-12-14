import React, { useState } from 'react'

export const SearchTodo = ({setSearchTodo}) => {
    const [searchValues, setSearchValue] = useState("");
    // const [getFilterValue, setGetFilterValue] = useState("")
    // console.log('searchTodos', todosArray);
    setSearchTodo(searchValues)
    // todosArray.map(todo=>{
    //     if(searchValues === todo.task){
    //         console.log(true);
    //         // setGetFilterValue(todo.task)
    //         console.log('todo.task', todo.task);

    //     }else{
    //         console.log(false);
    //     }
    // })
    console.log('searchValues', searchValues);
    // console.log('getSearchValue', getSearchValue);

    


  return (
    <div>
        <input type='text' placeholder='Search Task...' 
        onChange={(e)=>setSearchValue(e.target.value)}
        />

    </div>
  )
};