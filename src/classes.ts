interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.age = age;
    this.name = name;
  }

  sayMyName(): string {
    return this.name;
  }
}

//Shorthand construtor
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    //subclasses n acessam privados .age da Person
    return this.sayMyName;
  }
}

const newPerson = new Person(1, "Wagner", 25);
console.log(newPerson.sayMyName());

// para executar node dist/classes.js
