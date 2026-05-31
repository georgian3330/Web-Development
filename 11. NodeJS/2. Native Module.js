// https://nodejs.org/docs/latest-v18.x/api/index.html

// File System Module
const fs = require("fs");
fs.writeFile("2. Message.txt","Hello from NodeJS!", (err) => {
    if(err) throw err;
    console.log("The File has been saved!");
});

fs.readFile("message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
});