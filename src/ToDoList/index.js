import React from "react";
import ToDoItem from "../ToDoItem";
import "./styles.css";

export default function ToDoList({ toDoList, setToDoList }) {
  const handleDelete = (e) => {
    const todoId = e.target.parentNode.id; //find index from List
    console.log(todoId);
    console.log(toDoList);
    const newArr = toDoList;
    toDoList.map((todo, index) => {
      if (todo.id === todoId) {
        return newArr.splice(index, 1);
      }
    });

    console.log(newArr);
    setToDoList(newArr); //delete element from List
    console.log(toDoList);
  };

  // this.setState((prevState) => {
  //   const components = prevState.components.slice(0);
  //   components.splice(0, 0, element);
  //   return { components };
  // });

  return (
    <div>
      <p>Things not to do:</p>
      <ul id="task-list">
        <ToDoItem handleDelete={handleDelete} />
      </ul>
    </div>
  );
}
