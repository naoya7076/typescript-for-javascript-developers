export {};
/**
 * owner
 *  所有者
 *  初期化時に設定できる
 *  参照できる
 * secretNumber
 *  個人番号
 *  初期化時に設定できる
 *  途中で変更できる
 *  参照できない
 */
class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Shimizu', 123456789);
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 987654321;
console.log(card.debugPrint());
