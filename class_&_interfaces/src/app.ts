//type AddFn = (a:number, b: number) => number; 
//chang in interface, use interface as function type
interface AddFn {
    (n1: number, n2:number): number; //no method name, anonymous function
}

let add: AddFn;

add = (n1:number, n2: number) => {
    return n1 + n2;
}

interface Names {
    readonly name?: string; //separate with ; readonly - can't change after set up
    outputName?: string; //this property might exist in classes, optional
}

interface Habbits {
    readonly habbit?: string;
}

//type vs interface -> type is more flexible and interface is more clear. And interface for class
interface Greetable extends Names, Habbits { //inherit Names and Habbits, can be multiple
    greet(phrase: string): void
}

class Person implements Greetable { //implement the interface Greetable, follow the setup. Can implement several interface which is different to inheritance
    name?: string; //automatically readonly
    age = 30;
    

    constructor(name?: string) {
        if (name) {
            this.name = name;
        } else {
            console.log("Hi!");
        }
        
        //this.habbit = habbit
    }

    greet(phrase: string) { //there must be a greet method of the class which implement Greetable, and the function is flexable
        if (this.name) {
            console.log(phrase + '' + this.name);
        }
        
    }

}

let user1: Greetable;

// user1 = {
//     name: 'Xavier', //separate with ,
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + '' + this.name);
//     }
// }

user1 = new Person();
//user1.name = 'xavier'

user1.greet("Hi there, I am ")
console.log(user1)