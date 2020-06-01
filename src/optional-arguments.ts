export {};
/**
 *
 * @param height
 * @param weight
 * @param optional console.logで出力するかどうか
 * bmi(1.78,8.6,true)
 * bmi(1.78,8.6)
 */
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / height ** 2;
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};
// bmi(1.78, 86);
bmi(1.78, 86, false);
