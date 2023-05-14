//exemplo generics (passar tipagem por parametro)
const returnValue = <T, X, Y>(value: T): T => value;
const message = returnValue<string, boolean, number>("Hello World");
const count = returnValue<number, null, null>(5);

//outro exemplo
function getFirstValueFromArray<Type>(array: Type[]) {
  return array[0];
}
const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

//Promises
const returnPromise = async (): Promise<number> => {
  return 5;
};

//Classes
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
