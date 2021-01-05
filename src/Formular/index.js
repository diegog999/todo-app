import React from "react";
import Submitbttn from "../Submitbttn/index.js";
import "./style.css";

export default function Formular({ description }) {
  return (
    <form action="">
      <p>What are you NOT doing today:</p>
      <div class="inputArea shadow">
        <input type="text" name="task" id="task" placeholder="your Task" />
        <Submitbttn />
      </div>
    </form>
  );
}
