export {};
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('なおや');
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(me.name);
console.log(michael);
