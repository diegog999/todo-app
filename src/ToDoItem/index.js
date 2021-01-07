import React, { useState } from "react";
import "./styles.css";

export default function ToDoItem() {
  const [textClass, setTextClass] = useState("");

  const checkedHandler = () => {
    if (textClass === "") {
      setTextClass("checked");
    } else {
      setTextClass("");
    }
  };
  const editHandler = () => {
    console.log("hello");
  };

  return (
    <li className={textClass}>
      <span onClick={checkedHandler} className="text">
        Skip morning coffee
      </span>
      <span className="bttn edit" onClick={editHandler}></span>
      <span className="bttn delete"></span>
    </li>
  );
}
