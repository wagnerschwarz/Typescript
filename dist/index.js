"use strict";
//Tipos Básicos
let age = 5;
let firstName = "Wagner";
let isValid = true;
let idk = 5; //sem tipagem
idk = "12";
const ids = [1, 2, 3, 4, 5];
//Tupla
const person = [1, "Jane"];
//lista de Tuplas
const people = [
    [1, "Jane"],
    [2, "Wagner"],
];
//Intersections
const productID = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
//Type Assertions
const productName = "Boné";
// let itemId = productName as string;
let itemId = productName;
console.log(direction);
