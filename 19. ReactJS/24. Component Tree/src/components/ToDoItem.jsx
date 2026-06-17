// https://codesandbox.io/p/sandbox/managing-a-component-tree-forked-xjxkdy?file=%2Fsrc%2Fcomponents%2FToDoItem.jsx%3A8%2C25

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;


// Line Through part - Version II

/*

import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;


*/