// const names: Array<string> = []; //string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((res, rej) => { //tell TS promise will give string
//     setTimeout(() => {
//         res('This is done!')
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ') //so here can use method about string
// })

function merge<T extends object , U extends object>(objA: T, objB: U) { //T has be an object
    return Object.assign(objA, objB);
}

// console.log(merge({name: 'Xavier', age: 30},{age: 35}));
//what generics do is like below
// const mergeObj = merge<{name: string, hobbies: string[]}, {age:number}>({name: 'Xavier', hobbies: ['piano', 'jogging']}, {age: 35})
const mergeObj = merge({name: 'Xavier', hobbies: ['piano', 'jogging']}, {age: 35})
console.log(mergeObj); //TS don't get enough information originally, but now it know by generics

//working with constraints - extends
const mergeObjA = merge({name: 'Xavier', hobbies: ['piano', 'jogging']}, {age: 35}) //objB can't be 35
console.log(mergeObjA)
