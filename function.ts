function add(n1: number, n2: number) { //return type is number
    return n1 + n2;
}

function printResult(num: number): void { //return type is void, it doesn't return anything; undefinied need to return
    console.log("Result: " + num);
}

//printResult(add(5, 12));
//console.log(printResult(add(5, 12))); //undefinied

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

let combineValues: (a: number, b: number) => number;
 
combineValues = add;
//combineValues = 5;
//combineValues = printResult; //set type = function is not enough, as it can equal to other function

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log("CB here, print result..." + result);
})