// EXERCISE
/*

  1. Use NPM to install the morgan package
  2. Run index.js with nodemon
  3. Import the morgan module
  4. Mount the middleware using the express.use() method
  5. Test the logging on localhost and with postman
*/

import express from "express";

// Middleware
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
