import React from "react";
import ToDoItem from "../ToDoItem";
import "./styles.css";

export default function ToDoList() {

  /* let [list, listUpdater] = useState(); */
  
  return (
    <div>
      <p>Things not to do:</p>
      <ul id="task-list">
        <ToDoItem />
      </ul>
    </div>
  );
}
