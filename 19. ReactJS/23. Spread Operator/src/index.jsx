// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// const citrus = ["Lime", "Lemon", "Orange"];
// const fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// const fullName = {
//   fName: "James",
//   lName: "Bond"
// };

// const user = {
//   ...fullName,
//   id: 1,
//   username: "jamesbond007"
// };

// console.log(user);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
