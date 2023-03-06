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
printEmployeeInfo({name: 'Ceci', startDate: new Date()});

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck

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

