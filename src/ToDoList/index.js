import React from "react";
import ToDoItem from "../ToDoItem";
import "./styles.css";

export default function ToDoList({ toDoList }) {
  /* let [list, listUpdater] = useState(); */
  
  return (
    <div>
      <p>Things not to do:</p>
      <ul id="task-list">
        <ToDoItem toDoList={toDoList}/>
      </ul>
    </div>
  );
}
