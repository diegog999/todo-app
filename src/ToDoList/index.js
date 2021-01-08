import React from "react";
import ToDoItem from "../ToDoItem";
import "./styles.css";

export default function ToDoList({ toDoList, setToDoList }) {
  const handleDelete = (e) => {
    const todoId = e.target.parentNode.id;
    const newArr = toDoList;
    toDoList.map((todo, index) => {
      //find index from List
      if (todo.id === todoId) {
        return newArr.splice(index, 1);
      }
    });
    setToDoList(newArr); //delete element from List
  };

  return (
    <div>
      <p>Things not to do:</p>
      <ul id="task-list">
        {toDoList.map((toDo) => {
          return <ToDoItem toDo={toDo} handleDelete={handleDelete} />;
        })}
      </ul>
    </div>
  );
}
