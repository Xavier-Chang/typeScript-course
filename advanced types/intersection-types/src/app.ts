type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //name is the intersection

const e1: ElevatedEmployee = {
  name: "Xavier",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    //type guard - allow us to utilize the flexibility union types and ensure code runs correctly
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  // if (emp.privileges) check if it's exist in this syntax is not work in TS
  if ("privileges" in emp) {
    //use 'in' to check
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInfo(e1);
printEmployeeInfo({ name: "Ceci", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle) { //there maybe a risk of mistyping of the property
  //     vehicle.loadCargo(100);
  // }
  //instanceOf method - vehicle was created based on the Truck constructor function
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);

//discriminated unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
    type: 'horse';
  runningSpace: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
//   if ("flyingSpeed" in animal) { interface - no instanceof 
//     console.log("Moving with speed: " + animal.flyingSpeed);
//   }
    let speed;
    switch (animal.type) { //switch - 100% accurate and can use in interface
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpace;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10})

//type casting is to make sure TS know that it's specific HTML element, 2 alternative syntax
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

// userInputElement.value = 'Hi there!'

//if no !
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
(userInputElement as HTMLInputElement).value = 'Hi there!'}