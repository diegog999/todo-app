import React, { useState } from "react";
import "./styles.css";

export default function ToDoItem({ toDo, handleDelete }) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(toDo.title);

  const editHandler = () => {
    setEdit(true);
  };
  return (
    <>
      <li id={toDo.id} key={toDo.id}>
        {!edit ? (
          <>
            <span className="text">{toDo.title}</span>
            <span className="bttn edit"></span>
            <span
              className="bttn delete"
              onClick={(e) => {
                handleDelete(e);
              }}
            ></span>
          </>
        ) : (
          <>
            <input
              className="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <span
              className="bttn confirm"
              onClick={() => {
                toDo.title = input;
                setEdit(false);
              }}
            ></span>
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

// return (
//   <li id={toDo.id} key={toDo.id}>
//     <span className="text">{toDo.title}</span>
//     <span className="bttn edit"></span>
//     <span
//       className="bttn delete"
//       onClick={(e) => {
//         handleDelete(e);
//       }}
//     ></span>
//   </li>
// );
