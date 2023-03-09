//Decorator is for metaprogramming. All about class, function start by uppercase starting character
//Decorators execute when the class is defined, but not intsantiate
// one way to make decorator

// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

//another way to make decorator, Decoratory factory

function Logger(logString: string) {
  //can accept a parameter, more powerful
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  //not actually return anything here
  return function<T extends {new(...args: any[]): {name: string}}> (originalConstructor: T) {
    // _:function "_" --> I aware of it but won't use it

    return class extends originalConstructor { //replace the old class
      constructor(..._: any[]) {
        super();
        console.log("rendering template");
        const hookEl = document.getElementById(hookId);
        
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

//@ is a special identifier of TS, thing after @ should point to the function but not execute. It's decorator
// @Logger("LOGGING - PERSON") //pass an argument to the decoractor
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
//multiple secorators, bottom up execute
class Person {
  name = "Xavier";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

// ******

function Log(target: any, propertyName: string | symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this); //this refer to the object belongs
      return boundFn;
    }    
  }
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind //auto bind to the message, no need to add in the event listener
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer()

const button = document.querySelector('button') as HTMLElement;
//button.addEventListener('click', p.showMessage)//it's nor work as this. is refer to eventlistener but not message
button.addEventListener('click', p.showMessage) //bind to the class