function car(brand, name, base_modelYr, models){
    this.brand = brand;
    this.name = name;
    this.base_modelYr = base_modelYr;
    this.models = models;
    this.drive = function(){
        alert("Driving started...");
    }
}

var car3 = new car("Maruti Suzuki", "Maruti Suzuki Dezire", 2015, ["Dezire 1lt", "Dezire 1.2lt", "Dezire 1.5lt"]);

console.log(car3.name);
car3.drive();