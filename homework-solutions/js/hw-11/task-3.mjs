'use strict';
class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    this._firstName = firstName ?? 'Anton';
    this._lastName = lastName ?? 'Korshunov';
    this.#salary = salary ?? 2500;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
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

class Developer extends Employee {
  #profession
  constructor(firstName, lastName, salary, programmingLanguages,profession) {
    super(firstName, lastName, salary);
    this._programmingLanguages = [programmingLanguages].flat();
    this.#profession = 'Developer';
  }
  get programmingLanguages() {
    return this._programmingLanguages;
  }
  get profession() {
    return this.#profession;
  }
  addProgrammingLanguage(programmingLanguages) {
    if (typeof programmingLanguages !== 'string') {
      throw new Error('Programming language is wrong');
    }
    if (programmingLanguages.trim().replaceAll(' ', '').length === 0) {
      throw new Error('String is empty');
    }
    this._programmingLanguages.push(programmingLanguages);
  }
}

class Manager extends Employee {
  #profession
  constructor(firstName, lastName, salary, teamSize, profession) {
    super(firstName, lastName, salary);
    this._teamSize = teamSize;
    this.#profession = 'Manager';
  }
  get teamSize() {
    return this._teamSize;
  }
  get profession() {
    return this.#profession;
  }
  increaseTeamSize() {
    this._teamSize++;
  }
}

class Designer extends Employee {
  #profession
  constructor(firstName, lastName, salary, designTools, profession) {
    super(firstName, lastName, salary);
    this._designTools = [designTools].flat();
    this.#profession = 'Designer';
  }
  get designTools() {
    return this._designTools;
  }
  get profession() {
    return this.#profession;
  }
  addDesignTool(tool) {
    if (typeof tool !== 'string') {
      throw new Error('Programming language is wrong');
    }
    if (tool.trim().replaceAll(' ', '').length === 0) {
      throw new Error('String is empty');
    }
    this._designTools.push(tool);
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
    get employees() {
      return this.#employees;
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
      if (this.#employees.some((emp) => emp.getFullName() === employee.getFullName())) {
        throw new Error('Employee already exists');
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
getEmployeesByProfession(profession) {
  if (typeof profession !== 'string') {
    throw new Error('Profession is wrong');
  }
  if (profession.trim().replaceAll(' ', '').length === 0) {
    throw new Error('String is empty');
  }
  return this.#employees.filter((emp) => emp.profession === profession);
}
}
// console.log (Developer.programmingLanguages);
// const dev = new Developer('Alice', 'Smith', 80000, ['JavaScript'], 'Developer');
// const company = new Company("Tech Corp", "123-456", "Main Street");
// company.addEmployee(dev);
// console.log(company.findEmployeeByName('Alice'));
// const designer = new Designer('Diana', 'White', 75000, ['Photoshop']);
// company.addEmployee(designer);
// console.log(company.findEmployeeByName('Diana'));
// console.log(company.getEmployeesByProfession('Designer'));

// const dev = new Developer('Boris', 'Smith', 70000, ['JavaScript']);
// company.addEmployee(dev);
export { Employee, Company, Designer, Developer, Manager };

