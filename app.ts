function add(n1: number, n2: number) { //return type is number
    return n1 + n2;
}

function printResult(num: number): void { //return type is void, it doesn't return anything; undefinied need to return
    console.log("Result: " + num);
}

console.log(printResult(add(5, 12))); //undefinied

let someValue: undefined;