function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //JS --> run and throw the error, that's dynamic types (resolved at runtime)
  //TS --> TS can know the problem eariler (staic types, set during development)
  // if (typeof n1 !== 'number' || typeof n2!== 'number'){
  //     throw new Error('Incorrect input!')
  // }
  const result = n1+ n2;
  if (showResult === true) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}

//TS type number, no difference of 5 / 5.0
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase);
