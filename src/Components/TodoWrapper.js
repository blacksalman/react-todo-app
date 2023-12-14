import React, {useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { SearchTodo } from './SearchTodo';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState('');

    const addTodo = (todo) => {
        console.log('todo', todo);
        console.log('todos', todos);
        setTodos([...todos, {
            id: uuidv4(),
            task: todo,
            completed: false,
            isEditing: false
        }])
        console.log('todos', todos);
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo=>todo.id === id 
            ? {
                ...todo, completed: !todo.completed
               }
            : todo
        ))
    }

    const deleteTodo =(id) =>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo=>todo.id === id 
            ? {
                ...todo, isEditing: !todo.isEditing
               } 
            : todo
        ));
    }

    const editTask = (task , id) => {
        setTodos(todos.map(todo=>todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
        } : todo
        ))
    }
  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
        <SearchTodo setSearchTodo={setSearch}/>
        {search.length === 0 ? todos
        .map((todo, index)=>(

            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : 
            (
                <Todo 
                    task={todo} 
                    key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}

                />
            )
        )) : todos.filter(todo => todo.task.includes(search))
        .map((todo, index)=>(

            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) : 
            (
                <Todo 
                    task={todo} 
                    key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}

                />
            )
        ))}
    </div>
  )
}
