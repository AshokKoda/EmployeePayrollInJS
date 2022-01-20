class EmployeePayroll {

    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{3,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id =" + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", startDate = " + empDate;
    }
}
let employeePayroll = new EmployeePayroll(1, "Ashok", 20000);
console.log(employeePayroll);

try {
    employeePayroll.name = "Ashok123";
    console.log(employeePayroll.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayroll = new EmployeePayroll(2, "Terissa", 400000, "F", new Date());
console.log(newEmployeePayroll.toString()); 