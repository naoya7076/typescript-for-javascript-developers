export {};
//型の制約(constraint)はsignatureで行う
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'string') {
    return value + value;
  } else if (typeof value === 'number') {
    return value * 2;
  }
}

console.log(double(100));
console.log(double('Go'));
