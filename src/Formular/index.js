import React, { useState } from "react";
import Submitbttn from "../Submitbttn/index.js";
import "./style.css";

export default function Formular({ description, toDoList }) {

  let [inputValue, setInputValue] = useState();

  const addToDo = (toDoText) => { 
    const id = Date.now();
    const newToDos = [...list, {title: toDoText, id: id}]
    listUpdater(newToDos);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* is the input field empty? yes. do nothing! */
    if(!inputValue) return;
    addToDo(inputValue);
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
          laceholder="your Task" 
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Submitbttn />
      </div>
    </form>
  );
}
