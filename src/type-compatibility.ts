export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);
fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooString: string;
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

fooString = fooStringLiteral;

interface Animal {
  age: number;
  name: string;
}
class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(43, 'Naoya');
