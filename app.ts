// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: "Xaver",
    age: 34,
    hobbies: ["sports", "cooking"]
}

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