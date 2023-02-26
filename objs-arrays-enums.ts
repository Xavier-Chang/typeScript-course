// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//     name: "Xaver",
//     age: 34,
//     hobbies: ["sports", "cooking"],
//     role: [2, 'coder']
// };

// set Global variables, JS way
// const ADMIN = 0;
// const  = 1;
// const AUTHOR = 2;

//enum Role {ADMIN, READ_ONLY, AUTHOR}; ==> start from 0
enum Role {ADMIN = 5, READ_ONLY = 93, AUTHOR = "aur"}; //can assign the custom value

const person = {
    name: "Xaver",
    age: 34,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};

if (person.role === Role.AUTHOR) {
    console.log("is ADMIN");
}


// person.role.push('admin') //push is an exception which is allowed in tuples
//person.role[1] = 10;

//person.role = [0,'admin', 3] --> length is detected

let favouriteActivities: string[];
favouriteActivities = ['sports']

console.log(person.name);

// person.hobbies.forEach((e)=>{
//     console.log("hobby: ", e);
// })

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); //TS know hobby is a string and toUpper.. can be used
    // console.log(hobby.map()); //map is available on arr but not string
}