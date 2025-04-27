'use strict';
class Employee {
#salary;
  constructor(firstName, lastName, profession, salary) {
  this._firstName = firstName ?? 'Anton';
  this._lastName = lastName ?? 'Korshunov';
  this._profession = profession ?? 'AQA Engineer';
  this.#salary = salary ?? 2500;
}
get firstName() {
  return this._firstName;
}
get lastName() {
  return this._lastName;
}
get profession() {
  return this._profession;
}
get salary() {
  return this.#salary;
}
set firstName(value) {
  if (typeof value !== 'string') {
    throw new Error('First name is wrong');
  }
  this._firstName = value;
}
set lastName(value) {
  if (typeof value !== 'string') {
    throw new Error('Last name is wrong');    
  }
  this._lastName = value;
}
set profession(value) {
  if (typeof value !== 'string') {
    throw new Error('Profession is wrong');
  }
  this._profession = value;
}
set salary(value) {
  if (typeof value !== 'number' || value < 0) {
    throw new Error('Salary is wrong data');
  }
  this.#salary = value;
  }
  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
//    console.log(emp1.firstName);
//    emp1.salary = 3100;
//    console.log(emp1.salary);
class Company {
#employees
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }
  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }
  set title(value) {
    if (typeof value !== 'string') {
      throw new Error('Title is wrong');
    }
    this._title = value;
  }
  set phone(value) {
    if (typeof value !== 'string') {
      throw new Error('Phone is wrong');
    }
    this._phone = value;
  }
  set address(value) {
    if (typeof value !== 'string') {
      throw new Error('Address is wrong');
    }
    this._address = value;
  }
addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Cannot add non-employee');
    }
    this.#employees.push(employee);
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`
  }
}

 const company = new Company("Tech Corp", "123-456", "Main Street");
   const emp1 = new Employee("John", "Doe", "Developer", 3000);
   const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
   company.addEmployee(emp1);
   company.addEmployee(emp2);
   console.log(company.getEmployees()); // [Employee, Employee]
   console.log(company.getInfo());
export { Employee, Company };
