class Department {
  //JS just know public, TS supports private
  //private name: string; //public - default, acessible from outside
  //private employees: string[] = []; //modifier: private - only access inside the class
  protected employees: string[] = []; //not just private, every class extends this class
  /*
    old method
    private id: string;
    private name: string;
    private employees: string[] = [];

    constructor(id: string, n: string) {
        this.id = id;
        this.name = n;
    }    
    */

  //access modifier
  constructor(private readonly id: string, public name: string) {
    //id sholudn't change, use 'readonly'. Just in TS, not in JS
  }

  describe(this: Department) {
    //When describe is excuted, refer to an instance that's based on the department class
    console.log(`Department (${this.id}): ` + this.name);
  }

  addEmployee(employee: string) {
    //validation
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); //super calls the constructor of the base class
  }
}

const frontend = new ITDepartment("d2", ["Xavier", "Nicole"]);
console.log(frontend);
frontend.describe();
frontend.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string; //it must be empty firstly as no reports in string arr

  get mostRecentReport() {
    //getter method should return sth
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.')
  }

  set mostRecentReport(value: string) {
    if (!value) {
        throw new Error ('Please pass in a valid value!');
    }
    this.addReport(value)
  }
  

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d3", []);

accounting.mostRecentReport = "Year End Report";

// accounting.addReport("Here's the report...");

console.log(accounting.mostRecentReport);

accounting.printReport();
// accounting.addEmployee("Max");
// accounting.addEmployee("Cherry");
// accounting.printEmployeeInformation();

// const accounting = new Department('d1','Accounting');

//no validation
// accounting.employees[2] = "Melody";// I can add employee outside the class method, not a good way. One uniform way

// accounting.addEmployee("Xavier");
// accounting.addEmployee("Winnie")

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Finance', describe: accounting.describe}

// accountingCopy.describe();
