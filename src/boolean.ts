//変数をグローバル空間で扱わないようにするため、モジュール化する
export {};

let name = 'TypeScript';

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1;
console.log({ isFinished });
