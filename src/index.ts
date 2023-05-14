//Tipos Básicos
let age: number = 5;
let firstName: string = "Wagner";
let isValid: boolean = true;
let idk: any = 5; //sem tipagem
idk = "12";

const ids: number[] = [1, 2, 3, 4, 5];

//Tupla
const person: [number, string] = [1, "Jane"];

//lista de Tuplas
const people: [number, string][] = [
  [1, "Jane"],
  [2, "Wagner"],
];

//Intersections
const productID: string | number | boolean = false;

//Enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direction = Direction.Left;

//Type Assertions
const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);
