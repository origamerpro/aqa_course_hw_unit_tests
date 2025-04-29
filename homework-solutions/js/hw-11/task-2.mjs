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
    if (value.length < 2) {
      throw new Error('First name is too short');
    }
    if (value.length > 50) {
      throw new Error('First name is too long');
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error('First name contains invalid characters');
    }
    this._firstName = value;
  }
  set lastName(value) {
    if (typeof value !== 'string') {
      throw new Error('Last name is wrong');    
    }
    if (value.length < 2) {
      throw new Error('Last name is too short');
    }
    if (value.length > 50) {
      throw new Error('Last name is too long');
    }
    if (!/^[A-Za-z]+$/.test(value)) {
      throw new Error('Last name contains invalid characters');
    }
    this._lastName = value;
  }
  set profession(value) {
    if (typeof value !== 'string') {
      throw new Error('Profession is wrong');
    }
    if (value.trim().replaceAll(' ', '').length === 0) {
      throw new Error('String is empty');
    }
    if (!/^[A-Za-z ]+$/.test(value)) {
      throw new Error('Profession contains invalid characters');
    }
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Salary is wrong data');
    }
    if (value < 0 || value === 0) {
      throw new Error('Salary is too low');
    }
    if (value > 10000 || value === 10000) {
      throw new Error('Salary is too high');
    }
    this.#salary = value;
    }
    getFullName() {
      return `${this._firstName} ${this._lastName}`;
    }
  }

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
  findEmployeeByName(firstName) {
  if (typeof firstName !== 'string') {
    throw new Error('Name is wrong');
  }
  const employee = this.#employees.find((emp) => emp.firstName === firstName);
  if (!employee) {
    throw new Error('Employee not found');
  }
  return employee;
}
removeEmployee(firstName) {
  const findemp = this.findEmployeeByName(firstName)._firstName;
  if (`${findemp}` === firstName) {
  this.#employees.splice(getEmployeeIndex(`${findemp}`), 1);
  function getEmployeeIndex(firstName) {
    return company.#employees.findIndex((emp) => emp._firstName === firstName);
  }
}
}
getTotalSalary() {
  return this.#employees.reduce((total, emp) => total + emp.salary, 0);
}
}

const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

const company = new Company("Tech Corp", "123-456", "Main Street");
company.addEmployee(emp1);
company.addEmployee(emp2);Ъ0
+
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
company.removeEmployee("John");
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
