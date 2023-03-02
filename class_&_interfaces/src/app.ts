class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) { //When describe is excuted, refer to an instance that's based on the department class
        console.log('Department: ' + this.name);
    }
}

const accounting = new Department('Accounting');

console.log(accounting);
accounting.describe();

const accountingCopy = { name: 'Finance', describe: accounting.describe}

accountingCopy.describe();