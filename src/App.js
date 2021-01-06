import React, {useState} from "react";
import Formular from "./Formular";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  /* let toDoList = [{id: "1", title: "bla"}, {id: "1", tilte: "blubb"}, {id: "1", tilte: "blubber"}]; */

  return (
    <div className="main">
      <h1>
        <span>NOT</span>
        <span>todo</span>
        <span>LIST</span>
      </h1>
      <ol id="instructions">
        <li>Write down things not to do.</li>
        <li>
          If someone asks you to do said thing, just reply with: "Sorry, but
          that's on my Not Todo List."
        </li>
        <li>
          If you successfully avoided doing said thing, cross it of your list.
        </li>
      </ol>
      <Formular toDoList={toDoList}/>
      <ToDoList />
      <i className="license">
        icons by fontawesome -{" "}
        <a href="https://fontawesome.com/license">license</a>
      </i>
    </div>
  );
}

export default App;
