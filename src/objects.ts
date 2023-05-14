//types

type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email?: string; // o ? deixa opcional preencher o email
  password: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Jane",
  age: 20,
  password: "123",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

user.email;

const log2 = (message: string) => {};

log2(user.email!);

//unions
type Author = {
  books: string[];
};

const author: Author & User = {
  age: 2,
  books: ["1"],
  email: "",
  firstName: "a",
  orders: [],
  password: "123",
  register() {
    return "a";
  },
};

//interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  email: "teste",
  firstName: "ASD",
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "a",
  firstName: "b",
  books: [],
};

//type pode ser usado com Intersections, a interface nao
type Grade = number | string;
const grade: Grade = 1;
