import React from "react";
import "./styles.css";
import DeleteBttn from "../deleteBttn";
import EditBttn from "../editBttn";

export default function ToDoItem() {
  return (
    <li id="">
      <span class="text">Skip morning coffee</span>
      <EditBttn />
      <DeleteBttn />
    </li>
  );
}
