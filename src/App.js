import {useState} from "react";
import Formular from "./Formular";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(
    [
      {id: "1", title: "Talk about our lord and savior Jesus Christ"},
      {id: "2", title: "Deactivate addblocker"},
      {id: "3", title: "Accept all cookies"},
      {id: "4", title: "Take part in a survey"},
      {id: "5", title: "Skip morning coffee"}
    ]
  )

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
      <Formular toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      <i className="license">
        icons by fontawesome -{" "}
        <a href="https://fontawesome.com/license">license</a>
      </i>
    </div>
  );
}

export default App;
