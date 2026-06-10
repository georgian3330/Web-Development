// Object and its properties
var car1 = {
    brand : "Tata",
    name : "Tata Sierra",
    base_modelYr : 2026,
    models : ["Sierra 1lt", "Sierra 1.3lt", "Sierra 1.5lt"]
}

var car2 = {
    brand : "Kia",
    name : "Kia Seltos",
    base_modelYr : 2026,
    models : ["Seltos EV", "Seltos 1lt", "Seltos 1.4lt"]
}

console.log(car1.name);
console.log(car2.name);

// Object Function with properties as parameters - Constructor Function
function car(brand, name, base_modelYr, models){
    this.brand = brand;
    this.name = name;
    this.base_modelYr = base_modelYr;
    this.models = models;
}

var car3 = new car("Maruti Suzuki", "Maruti Suzuki Dezire", 2015, ["Dezire 1lt", "Dezire 1.2lt", "Dezire 1.5lt"]);

console.log(car3.models);