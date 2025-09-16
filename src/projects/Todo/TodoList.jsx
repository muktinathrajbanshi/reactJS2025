import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md';

export const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckTodo}) => {
  return (
    <>
       <li className="todo-item">
            <div className="spanData">
            <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
            </div>
            <div className="buttonData">
            <button className="check-btn" onClick={() => onHandleCheckTodo(data)}>
            <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
            <MdDeleteForever />
            </button>
            </div>
        </li>
    </>
  );
};
