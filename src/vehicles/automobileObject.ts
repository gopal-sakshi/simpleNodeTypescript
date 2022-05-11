import { Car } from "./car-class";
import { Train } from "./train-class";

var carObj1 = new Car('Audi');
carObj1.startEngine();
var details1 = carObj1.getDetails();
console.log(details1);
console.log(carObj1.isFamousCar());


var trainObj1 = new Train('Godavari');
trainObj1.stopEngine();
console.log(trainObj1.isFamousTrain());