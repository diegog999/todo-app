import React, { useState } from "react";
import "./styles.css";

export default function ToDoItem({ toDo, handleDelete, handleCheck }) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState();
  return (
    <>
      <li
        //depending on checked(true/false), li-class changes to "checked"
        className={`${toDo.checked ? "checked" : ""}`}
        id={toDo.id}
        key={toDo.id}
      >
        {/* depending on edit(true/false), returns span-element with title when edit=false, returns input-field when edit=true */}
        {!edit ? (
          <>
            {/* Non-Editable List-Item: can be marked as checked by clicking on text-span, edited and deleted */}
            <span
              className="text"
              onClick={(e) => {
                handleCheck(e);
              }}
            >
              {toDo.title}
            </span>
            {/* Edit-Button */}
            <span
              className="bttn edit"
              onClick={() => {
                setEdit(true);
                setInput(toDo.title);
              }}
            ></span>
            {/* Delete-Button */}
            <span
              className="bttn delete"
              onClick={(e) => {
                handleDelete(e);
              }}
            ></span>
          </>
        ) : (
          <>
            {/* Editable Element with confirm- and abort-button */}
            <input
              className="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* Confirm-Button: sets todo-Title to value of input-field */}
            <span
              className="bttn confirm"
              onClick={() => {
                toDo.title = input;
                setEdit(false);
              }}
            ></span>
            {/* Abort-Button: sets input-field-value to todo-Title */}
            <span
              className="bttn abort"
              onClick={() => {
                setEdit(false);
                setInput(toDo.title);
              }}
            ></span>
          </>
        )}
      </li>
    </>
  );
}
