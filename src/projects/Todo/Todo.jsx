import React, { useEffect, useState } from 'react';
import "./Todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';


export const Todo = () => {
    
    const [task, setTask] = useState([]);
    const [dateTime, setDateTime] = useState("");

   

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

    useEffect(() => {
    const interval = setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
       setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);

    }, []);

  return (
    <>
      <section className="todo-container">
        <header>
            <h1>Todo List</h1>
            <h2 className="date-time">{dateTime}</h2>
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnordList">
            <ul>
                {
                    task.map((curTask, index) => {
                        return (
                            <TodoList key={index} data={curTask} onHandleDeleteTodo={handleDeleteTodo} />
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
