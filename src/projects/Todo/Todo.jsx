import React, { useState } from 'react';
import "./Todo.css";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';


export const Todo = () => {
    
    const [task, setTask] = useState([]);
    

   

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} = inputValue;

        //to check if the input field is empty or not
        if(!content) return;

        //to check if the data is already existed or not
        // if(task.includes(inputValue)) return; 
        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );
        if(ifTodoContentMatched) return;

        setTask((prevTask) => [ ... prevTask, {id, content, checked}]);
    };

    //todo handleDeleteTodo functionality

    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData functionality
    const handleClearTodoData = () => {
        setTask([]);
    };

  return (
    <>
      <section className="todo-container">
        <header>
            <h1>Todo List</h1>
             <TodoDate />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <section className="myUnordList">
            <ul>
                {
                    task.map((curTask) => {
                        return (
                            <TodoList 
                            key={curTask.id} 
                            data={curTask.content} 
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
