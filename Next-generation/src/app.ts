// const userName = "Xavier";
// userName = "XaC"
// let age = 30;

// age = 29;

// function add(a: number, b: number) {
//     var result;
//     result = a + b;
//     return result;
// }

// const add = (a: number, b: number = 1) =>  a + b; //default argument -> b=1 if no assignment. But it can't set to a as it can't skip

// console.log(add(2, 5));

// const printOutput: (a: string | number) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5))

const hobbies = ["sport", "piano", "cooking", "traveling"];
// const activeHobbies = ['hiking', ...hobbies];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies); //"..."" tell JS to pull out all the element
console.log(activeHobbies);

const person = {
  firstName: "Xavier",
  age: 30,
};

const copiedPerson = { ...person }; //"..." pull all the key value pairs out of there

const add = (...numbers: number[]) => {
  //REST parameters - ... merge all incoming parameters into an array
  return numbers.reduce((acc, cum) => {
    return acc + cum;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies; //destructure - pull elements out of the arr
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);

const { firstName: userName, age } = person; //JS - rename, not TS here

console.log(userName, age);