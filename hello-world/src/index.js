import React from 'react';
import ReactDOM from 'react-dom';

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