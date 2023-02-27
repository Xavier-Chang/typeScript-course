let userInput: unknown; //we don't know yet what the user will eventually enter, it's different to any

let userName: string

userInput = 5;
userInput = "Xavier"
//userName = userInput -> not guarantee to be string

if (typeof userInput === "string") { //need extra check for unknown type
    userName = userInput;
}

//does not return void, if declare the type in void, it will crash the script
function generateError(message: string, code: number): never {  //never return anything
    throw {message: message, errorCode: code}
}

generateError('An error occurred!', 500);