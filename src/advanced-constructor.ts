export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむ', 13);
console.log(me);
