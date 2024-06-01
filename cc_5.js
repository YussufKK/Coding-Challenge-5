class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Method to calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }

    // Method to log name and monthly salary
    logMonthlySalary() {
        console.log(`Name: ${this.name}, Monthly Salary: $${this.salary.toFixed(2)}`);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    calculateAnnualSalary() {
        const baseSalary = super.calculateAnnualSalary();
        const bonus = baseSalary * 0.15;
        return baseSalary + bonus;
    }

    // Method to log bonus and total annual salary
    logAnnualSalaryWithBonus() {
        const annualSalary = this.calculateAnnualSalary();
        console.log(`Name: ${this.name}, Department: ${this.department}`);
        console.log(`Bonus: $${(annualSalary - super.calculateAnnualSalary()).toFixed(2)}`);
        console.log(`Total Annual Salary (including bonus): $${annualSalary.toFixed(2)}`);
    }
}

// Instantiate Manager objects with provided test data
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
const manager2 = new Manager("Debbie Little", 7205, "Finance");

// Log the details of Manager objects
manager1.logMonthlySalary();
manager1.logAnnualSalaryWithBonus();
console.log("---------------------");
manager2.logMonthlySalary();
manager2.logAnnualSalaryWithBonus();
