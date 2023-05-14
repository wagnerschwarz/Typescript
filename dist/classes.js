"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.age = age;
        this.name = name;
    }
    sayMyName() {
        return this.name;
    }
}
const newPerson = new Person(1, "Wagner", 25);
console.log(newPerson.sayMyName());
