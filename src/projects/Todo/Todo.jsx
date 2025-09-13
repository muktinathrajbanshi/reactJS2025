import React from 'react';
import "./Todo.css";

export const Todo = () => {
  return (
    <>
      <div className="todo-container">
        <header>
            <h1>Todo List</h1>
        </header>
        <section className="form">
            <form>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" />
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
      </div>
    </>
  );
};
