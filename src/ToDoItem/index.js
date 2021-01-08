import React from "react";
import "./styles.css";

export default function ToDoItem({ toDo, handleDelete }) {
  return (
    <li id={toDo.id} key={toDo.id}>
      <span className="text">{toDo.title}</span>
      <span className="bttn edit"></span>
      <span
        className="bttn delete"
        onClick={(e) => {
          handleDelete(e);
        }}
      ></span>
    </li>
  );
}
