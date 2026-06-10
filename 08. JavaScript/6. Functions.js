// Creating a Function
function getMilk(){
    var milk = 2;
    return milk;
}

// Calling the Function
console.log(getMilk());


// Function with parameters and arguments
function getMilkinBottle(bottle){
    var cost = bottle * 1.5;
    var nBottle = Math.floor(cost / 1.5);
    return "Cost of milk: $" + cost;
}

console.log(getMilkinBottle(2));