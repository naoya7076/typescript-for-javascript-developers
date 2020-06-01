export {};

const bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
) => weight / height ** 2;

console.log(bmi(1.73, 64));
