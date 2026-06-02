import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
function passwordCheck(req, res, next) {
  const password = req.body?.password;
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/10. Secret Project.html");
});

app.post("/check", passwordCheck, (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/11. Secrets.html");
  } else {
    res.sendFile(__dirname + "/10. Secret Project.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
