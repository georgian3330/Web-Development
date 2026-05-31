// NPM - Node Package Manager
// npm init - package.json


// npm install sillyname - package-lock.json & node_modules
var generateName = require("sillyname");
var sillyName = generateName();
console.log(`My name is ${sillyName}.`);


// npm install superheroes
import superheroes from "superheroes";
const name = superheroes.random();
console.log(`I am ${name}!`);