//type vs interface -> type is more flexible and interface is more clear. And interface for class
interface Greetable {
    name: string; //separate with ;
    
    greet(phrase: string): void
}

class Person implements Greetable { //implement the interface Greetable, follow the setup. Can implement several interface which is different to inheritance
    name: string;
    age = 30;

    constructor(name: string) {
        this.name = name;
    }

    greet(phrase: string) {
        console.log(phrase + '' + this.name);
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

user1 = new Person('Max');

user1.greet("Hi there, I am ")
console.log(user1);