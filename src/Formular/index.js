import React, { useState } from "react";
import Submitbttn from "../Submitbttn/index.js";
import "./style.css";

export default function Formular({ toDoList, setToDoList }) {

  let [inputValue, setInputValue] = useState();

  const addToDo = (toDoTitle) => { 
    const newToDo = {id: Date.now(), title: toDoTitle}
    const newToDos = [...toDoList, newToDo]
    setToDoList(newToDos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* is the input field empty? yes. do nothing! */
    if(!inputValue || inputValue.trim() === "") {
      alert("Please type in something you do not want to do.");
    } else {
      addToDo(inputValue);
    }
    setInputValue("");
  }

  return (
    <form onSubmit={e => handleSubmit(e)} action="">
      <p>What are you NOT doing today:</p>
      <div className="inputArea shadow">
        <input 
          type="text" 
          name="task" 
          id="task" 
          placeholder="your Task" 
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Submitbttn />
      </div>
    </form>
  );
}
