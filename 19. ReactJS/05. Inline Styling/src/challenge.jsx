//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

var message = "";

var heading = {
  color: "black",
  fontSize: "50px",
  fontWeight: "bold",
  borderBottom: "5px solid black",
};

if (hour < 12) {
  message = "morning";
  heading.color = "red";
} else if (hour < 18) {
  message = "Afternoon";
  heading.color = "green";
} else {
  message = "evening";
  heading.color = "blue";
}

ReactDOM.render(
  <h1 style={heading}>Good {message}</h1>,
  document.getElementById("root")
);