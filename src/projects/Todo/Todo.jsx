import React, { useState } from 'react';
import "./Todo.css";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';


export const Todo = () => {
    
    const [task, setTask] = useState([]);
    

   

    const handleFormSubmit = (inputValue) => {

        if(!inputValue) return;
        if(task.includes(inputValue)) return; 
        setTask((prevTask) => [ ... prevTask, inputValue]);
    };

    //todo handleDeleteTodo functionality

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData functionality
    const handleClearTodoData = () => {
        setTask([]);
    };

    //todo Date and Time

    <TodoDate />

  return (
    <>
      <section className="todo-container">
        <header>
            <h1>Todo List</h1>
          
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnordList">
            <ul>
                {
                    task.map((curTask, index) => {
                        return (
                            <TodoList 
                            key={index} 
                            data={curTask} 
                            onHandleDeleteTodo={handleDeleteTodo} 
                            />
                        );
                    })
                }
            </ul>
        </section>
        <section>
            <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
        </section>
      </section>
    </>
  );
};
