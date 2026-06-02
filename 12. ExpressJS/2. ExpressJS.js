// https://expressjs.com/en/

// Step 1: Install express module
/*
  npm install express
*/

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


// Step 2: Run node index.js
/*
  node index.js
*/

// Step 3: Run localhost server
/*
  Type localhost:port_name in your browser
*/

// Step 4: Checking local servers running on your machine
/*
  Window: netstat -ano | findstr "LISTENING"
  Mac/Linux: sudo lsof -i -P -n | grep LISTEN
*/