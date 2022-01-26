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
} 
//Create an object of the car
const myCar = new Car("Ford");
