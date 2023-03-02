class Department {
    //JS just know public, TS supports private
    public name: string; //public - default, acessible from outside
    private employees: string[] = []; //modifier: private - only access inside the class

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) { //When describe is excuted, refer to an instance that's based on the department class
        console.log('Department: ' + this.name);
    }

    addEmployee(employee: string) {
        //validation
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting');

//no validation
// accounting.employees[2] = "Melody";// I can add employee outside the class method, not a good way. One uniform way

accounting.addEmployee("Xavier");
accounting.addEmployee("Winnie")

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Finance', describe: accounting.describe}

// accountingCopy.describe();