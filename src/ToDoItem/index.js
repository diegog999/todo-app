import React from "react";
import "./styles.css";

export default function ToDoItem({ todoList, handleDelete }) {
  return (
    <li id="1">
      <span class="text">Skip morning coffee</span>
      <span className="bttn edit"></span>
      <span
        className="bttn delete"
        onClick={(e) => {
          console.log(e);
          handleDelete(e);
        }}
      ></span>
    </li>
  );
}
