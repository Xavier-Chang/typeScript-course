function add(n1: number, n2: number) {
  //JS --> run and throw the error, which can be prevented by TS
  // if (typeof n1 !== 'number' || typeof n2!== 'number'){
  //     throw new Error('Incorrect input!')
  // }
  return n1 + n2;
}

const number1 = "5";
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
