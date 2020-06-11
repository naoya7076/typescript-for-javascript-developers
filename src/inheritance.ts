export {};

class Animal {
  run(): string {
    return 'Running!';
  }
}
class Lion extends Animal {
  run(): string {
    return 'Running at 80km';
  }
}

let animal = new Animal();
let lion = new Lion();
console.log(animal.run());
console.log(lion.run());
