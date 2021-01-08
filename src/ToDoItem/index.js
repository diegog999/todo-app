import React from "react";
import "./styles.css";

export default function ToDoItem({ toDo, handleDelete }) {
  return (
    <li key={toDo.id}>
      <span class="text">{toDo.title}</span>
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
