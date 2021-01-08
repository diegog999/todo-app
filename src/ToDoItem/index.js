import React from "react";
import "./styles.css";

export default function ToDoItem({ toDo }) {
  return (
    <>
      <li key={toDo.id}>
        <span className="text">{toDo.title}</span>
        <span className="bttn edit"></span>
        <span className="bttn delete"></span>
      </li>
    </>
  );
}
