import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

/*Create my first element and render it
const myFirstElement = <h1>Hello React!</h1>
ReactDOM.render(myFirstElement, document.getElementById("root"));
*/


//Create my first class
class Car{
  constructor(name){
    this.brand = name;
  }

//Add the present method
  present() {
    return 'I have a ' + this.brand;
  }

} 

//Create an object of the car
const myCar = new Car("Ford");
//Call present: I have a Ford
document.getElementById("Car").innerHTML = myCar.present();


//Create a class inherited from Car
class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  show() {
    return this.present() + ',it is a ' + this.model;
  }
}

const myCarModel = new Model("Ford","Mustang");
//I have a Ford, it is a Mustang
document.getElementById("Model").innerHTML = myCarModel.show();



//Arrow functions
//Simple function
const hello = function() {
  return 'Normal Function.';
}
document.getElementById("NormalFunction").innerHTML = hello();

//Arrow function
const helloWithArrow = () =>{
  return 'Arrow Function';
}
document.getElementById("ArrowFunction").innerHTML = helloWithArrow();

//Arrow function shortened
const helloArrowShort = () => "Shortened Arrow returing only 1 value";
document.getElementById("ArrowFunctionShort").innerHTML = helloArrowShort();

//Arrow function with parameter
const helloWithParameter = (param) => "Arrow function with 1 " + param;
document.getElementById("ArrowWithParameter").innerHTML = helloWithParameter("Parameter!");

//Arrow function without paranthesis
const helloWithoutParanthesis = param => "Arrow without " + param;
document.getElementById("ArrowWithoutParanthesis").innerHTML = helloWithoutParanthesis("Paranthesis");


//this represents the object that defined the Arrow function
//Here are two examples showing the difference
//With Regular function
class siteHeader{
  constructor(){
    this.color = 'red';
  }
  changeColor = function() {
    document.getElementById("changeColor").innerHTML += this; 
  }
  arrowChangeColor = () =>{
    document.getElementById("arrowChangeColor").innerHTML += this; 
  }
}
const mySiteHeader = new siteHeader();
window.addEventListener("load", mySiteHeader.changeColor); //[object Window] on site load
document.getElementById("btn").addEventListener("click", mySiteHeader.changeColor);
//[object Window][object HTMLButtonElement] on button click

//Now with Arrow function
window.addEventListener("load", mySiteHeader.arrowChangeColor); //[object Object] on site load
document.getElementById("arrowBtn").addEventListener("click", mySiteHeader.arrowChangeColor);
//[object Object][object Object] on button click


//Difference: Const and var
const x = 2;
//const x = 1; Parsing error: Identifier 'x' has already been declared.
var b = 1;
var b = 2; //OK, with warning: 'b' is already defined


//Array.map( )
const fruits = ['Array Map example','apple', 'banana','mango'];
const mappedFruits = fruits.map((element) => {return <p>{element}</p>});
ReactDOM.render(mappedFruits, document.getElementById("arrayMap"));


//Destructuring arrays
const vehicles = ['Mustang', 'Volvo','Mahindra'];
const [car, bus, truck] = vehicles;
const models = [car, bus , truck];
ReactDOM.render(models, document.getElementById('destructuring'));

//Handy desctructuring
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}
const [addition, subtraction, multiplication, division] = calculate(40, 20);
const [,,,div] = calculate(25,10); //extract only the fourth element
//render it
const maths = [addition,',', subtraction,',', multiplication,',', division, ',',div];
ReactDOM.render(maths, document.getElementById('maths')); 

//Destructuring Objects
//Old way
const vehicleOne = {
  brand: 'Ford',
  type: 'Mustang',
  color: 'red',
  year: 2022
}

showMyVehicle(vehicleOne);
function showMyVehicle(vehicle) {
  const message = '<br/>Old: My ' + vehicle.brand + ' is a ' + vehicle.type + ' in bright ' + vehicle.color + ' manufactured in ' + vehicle.year + '.';
  document.getElementById('showOldVehicle').innerHTML = message; 
}

//new way
showMyNewVehicle(vehicleOne);
function showMyNewVehicle({brand, color, type, year}) { //order of param elements is not important
  const message = 'New: My ' + brand + ' is a ' + type + ' in bright ' + color + ' manufactured in ' + year + '.';
  document.getElementById('showNewVehicle').innerHTML = message;
}


//Destructuring ojects with deep nesting
const vehicleTwo = {
  brand: 'BWM',
  type: {
    model: 'Mini',
    extension: 'lxi'
  },
  color: 'deep green'
}

showMyDetailedVehicle(vehicleTwo); //normal functions can be used before they are defined
function showMyDetailedVehicle({brand, type: {extension, model}, color}) {
  const message = 'Deep Nesting: I bought a ' + brand + ' ' + model + ' ' + extension + ' in ' + color +'.';
  document.getElementById('showMyDetailedVehicle').innerHTML = message;
}



//Spread operator
//Copy 2 arrays to a thrid one
const arrOne = ['ArrOne',1,2,3,4];
const arrTwo = ['ArrTwo',5,6,7,8];
const arrCombined = [...arrOne, ...arrTwo];
ReactDOM.render(arrOne, document.getElementById('arrOneForSpreadOp'));
ReactDOM.render(arrTwo, document.getElementById('arrTwoForSpreadOp'));
ReactDOM.render(arrCombined, document.getElementById('combineArrayWithSpreadOp'));

//in combo with desctructuring
const [first, second, ...rest] = arrCombined;
ReactDOM.render(first, document.getElementById('firstElementWithDestructuring'));
ReactDOM.render(second, document.getElementById('secondElementWithDestructuring'));
ReactDOM.render(rest, document.getElementById('restOfElements'));

//in combo with objects
const vehicleThree = {
  brand: 'Ford',
  color: 'yellow'
}
const vehicleFour = {
  type: 'Mustang',
  year: 2022,
  color: 'deep blue'
}
const combinedVehicle = {...vehicleThree, ...vehicleFour };
const showCombinedVehicle = ({brand,color,type, year}) => {
  const message = 'This is a combined vehicle of ' + brand + ',' + type + ' in ' + color + ' and built in ' + year;
  ReactDOM.render(message, document.getElementById('combinedVehicle'));
}
showCombinedVehicle(combinedVehicle);//arrow functions cannot be used before they are defined!!
