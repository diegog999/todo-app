import React from "react";
import "./styles.css";

export default function ToDoItem() {
  return (
    <li id="">
      <span className="text">Skip morning coffee</span>
      <span className="bttn edit"></span>
      <span className="bttn delete"></span>
    </li>
  );
}
