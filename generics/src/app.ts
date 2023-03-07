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
// console.log(mergeObj); //TS don't get enough information originally, but now it know by generics

//working with constraints - extends
const mergeObjA = merge({name: 'Xavier', hobbies: ['piano', 'jogging']}, {age: 35}) //objB can't be 35
// console.log(mergeObjA)

interface Lengthy {
    length: number
}

function courtAndDescribe<T extends Lengthy>(element: T): [T, string] { //the fact is that it has length property, whatever it's string or array. But number is not OK as it has no length
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 elements.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.'
    }
    return [element, descriptionText]
}

// console.log(courtAndDescribe(['sport', 'cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]; //how can TS know that the key is exactly exist in the object, by setting keyof
}

extractAndConvert({name: 'Xavier', age: 30}, 'age')

class DataStorage<T extends string | number | boolean> { //generic type no need to limit the type here
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Xavier')
textStorage.addItem('Chang')
textStorage.removeItem('Chang')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();

// objStorage.addItem({name: 'Xavier'})
// objStorage.addItem({name: 'Chang'});
// // ...
// objStorage.removeItem({name: 'Xavier'}) //reference address issue, it's a new object. just remove the last element
// console.log(objStorage.getItems());