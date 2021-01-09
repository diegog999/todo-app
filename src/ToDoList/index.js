import React from "react";
import ToDoItem from "../ToDoItem";
import "./styles.css";

export default function ToDoList({ toDoList, setToDoList }) {
  //Delete Handler - deleting ToDo-Item of list
  const handleDelete = (e) => {
    const todoId = e.target.parentNode.id;
    toDoList.forEach((todo, index) => {
      //find index from List
      if (parseInt(todo.id) === parseInt(todoId)) {
        toDoList.splice(index, 1);
      }
    });
    setToDoList([...toDoList]);
  };

  //Check Handler - changes checked-prop to true/false
  const handleCheck = (e) => {
    const todoId = e.target.parentNode.id;
    toDoList.forEach((todo, index) => {
      if (parseInt(todo.id) === parseInt(todoId)) {
        toDoList[index].checked = !toDoList[index].checked;
      }
    });
    setToDoList([...toDoList]);
  };
  return (
    <div>
      <p>Things not to do:</p>
      <ul id="task-list">
        {toDoList.map((toDo) => {
          return (
            <ToDoItem
              toDo={toDo}
              checked={toDo.checked}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
          );
        })}
      </ul>
    </div>
  );
}
