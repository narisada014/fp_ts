interface Result {
  id: number;
  result: number;
}

const results: Result[] = [
  { id: 1, result: 33 },
  { id: 2, result: 87 },
  { id: 3, result: 89 },
];

/* 制御フロー */
// この関数は再利用不可能
const avg = (arr: Result[]) => {
  let sum = 0;
  arr.forEach((item) => {
    sum += item.result;
  });
  return sum / arr.length;
};

const resultAvg = avg(results);
console.log(resultAvg);

/* 宣言的 */
const add = (a: number, b: number) => a + b;
const division = (a: number, b: number) => a / b;

// この関数は再利用不可能
const avg2 = (arr: Result[]) =>
  division(arr.map((a) => a.result).reduce(add, 0), arr.length);
const resultAvg2 = avg(results);
console.log(resultAvg);

/* 関数型プログラミング */
const add2 = (a: number, b: number) => a + b;
const addMany = (...args: number[]) => args.reduce(add2, 0);
const division2 = (a: number, b: number) => a / b;
const mapProp = <T>(k: keyof T, arr: T[]) => arr.map((a) => a[k]);
const avg3 = (arr: number[]) => division2(addMany(...arr), arr.length);

// この関数は再利用不可能
const resultAvg3 = avg3(mapProp("result", results));
console.log(resultAvg3);

/* 関数型プログラミングを厳密にやっていくと再利用可能な純粋関数の数が増えていくことがわかる */
