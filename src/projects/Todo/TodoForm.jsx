import { useState } from 'react';

export const TodoForm = ({onAddTodo}) => {
    const [inputValue, setInputValue] = useState({});

     const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, checked: false});
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue("");
    };

  return (
    <>
      <section className="form">
                  <form onSubmit={handleFormSubmit} className="form-flex">
                      <div>
                          <input 
                          type="text" 
                          className="todo-input" 
                          autoComplete="off" 
                          value={inputValue.content}
                          onChange={(event) => handleInputChange(event.target.value) }
                          />
                      </div>
                      <div>
                          <button type="submit" className="todo-btn">Add Task</button>
                      </div>
                  </form>
              </section>
    </>
  );
};
