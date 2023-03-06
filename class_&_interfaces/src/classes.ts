abstract class Department {
  static  fiscalYear = 2020; //can't access in the class by this
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
  constructor(protected readonly id: string, public name: string) {
    //id sholudn't change, use 'readonly'. Just in TS, not in JS
    //console.log(Department.fiscalYear); access by the class.variable...
  }

  static createEmployee(name: string) { //we can access without instantiating this class
    return {name: name}
  }

//   describe(this: Department) {
//     //When describe is excuted, refer to an instance that's based on the department class
//     console.log(`Department (${this.id}): ` + this.name);
//   }
  abstract describe(this: Department): void; //this method should be implented in every inheritance class, enforce them to follow

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

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}



const employee1 = Department.createEmployee('Max')
console.log("Here", employee1, Department.fiscalYear);

const frontend = new ITDepartment("d2", ["Xavier", "Nicole"]);
console.log(frontend);
frontend.describe();
frontend.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string; //it must be empty firstly as no reports in string arr
  private static instance: AccountingDepartment;

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
  

  private constructor(id: string, private reports: string[]) { //can just create one accounting dep.
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() { //check if we already have this class
    if (AccountingDepartment.instance) {
        return this.instance
    }
    this.instance = new AccountingDepartment("d3", []); //create the unique instance here
    return this.instance;
  }

  describe() {
      console.log('Accounting Department - ID: ' + this.id);
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

// const accounting = new AccountingDepartment("d3", []);
const accounting = AccountingDepartment.getInstance();
//const accounting2 = AccountingDepartment.getInstance(); //can't make a new one, it's same as the previous one

console.log(accounting);

accounting.mostRecentReport = "Year End Report";

// accounting.addReport("Here's the report...");

console.log(accounting.mostRecentReport);

accounting.printReport();
// accounting.addEmployee("Max");
// accounting.addEmployee("Cherry");
// accounting.printEmployeeInformation();
accounting.describe()

// const accounting = new Department('d1','Accounting');

//no validation
// accounting.employees[2] = "Melody";// I can add employee outside the class method, not a good way. One uniform way

// accounting.addEmployee("Xavier");
// accounting.addEmployee("Winnie")

// accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Finance', describe: accounting.describe}

// accountingCopy.describe();
