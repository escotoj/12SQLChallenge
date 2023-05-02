const {
  getAllDepartments,
  getAllRoles, getAllEmployees
} = require("../controllers/dbController");
const connection = require("../config/connection");
require("console.table");
// The whole organization is ORG
class Org {
  constructor() {
    this.optionsList = null; // list of options should render whatever they pick. (either all departments, roles, employees)
    this.departmentName = null; // adding a new department

    // When they choose to add new role these are their answers (name, salary, department)
    this.roleSalary = null;
    this.roleDepartment = null;
    // need to add role name // this should be a list also

    // When they choose to add new employee these are their answers (first_name, last_name, role, manager)
    this.employeeFirstName = null;
    this.employeeLastName = null;
    this.employeeRole = null;

    // When they choose to update an employee these are their answers (first_name, last_name, role, manager)
    this.employeeUpdate = null; // this should be a list
    this.employeeUpdateRole = null; // input
  }
  setText(shapeText) {
    this.shapeText = shapeText;
  }
}

class Department extends Org {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text></svg>`;
  }

  displayDepartment() {
    console.log("method hit");
    getAllDepartments().then((res) => {
      console.table(res);
    });
  }
}

class Role extends Org {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" height="220" width="220" fill="${this.shapeColor}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text> </svg>`;
  }
}

class Employee extends Org {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.shapeText}</text></svg>`;
  }
}

class DB {
  // retrieve datya from our database
  constructor(connnection) {
    this.connection = connnection;
  }
  findAllDepartments() {
    getAllDepartments().then((res) => console.table(res));
  }

  findAllRoles() {
    getAllRoles().then((res) => console.table(res));
  }
  
  findAllEmployees() {
    getAllEmployees().then((res) => console.table(res));
  }
}
const db = new DB(connection);

module.exports = { db };
