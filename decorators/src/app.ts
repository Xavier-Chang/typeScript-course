//Decorator is for metaprogramming. All about class, function start by uppercase starting character
//Decorators execute when the class is defined, but not intsantiate
// one way to make decorator

// function Logger(constructor: Function) {
//     console.log('Logging...');
//     console.log(constructor);
// }

//another way to make decorator, Decoratory factory

function Logger(logString: string) { //can accept a parameter, more powerful
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) { // _:function "_" --> I aware of it but won't use it
        console.log("rendering template");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

//@ is a special identifier of TS, thing after @ should point to the function but not execute. It's decorator
// @Logger("LOGGING - PERSON") //pass an argument to the decoractor
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
//multiple secorators, bottom up execute
class Person {
  name = "Xavier";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
