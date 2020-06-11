export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Naoya';
  static lastName: string = 'Shimizu';
  static work() {
    return `Hey, guys! This is ${this.firstName}`;
  }
}

console.log(Me.isProgrammer);
console.log(Me.work());
