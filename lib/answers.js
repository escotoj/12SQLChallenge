const {
  getAllDepartments, getAllRoles, getAllEmployees, createDepartment, createRole, createEmployee, updateEmployee
} = require("../controllers/dbController");
const connection = require("../config/connection");
require("console.table");
// The whole organization is db
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
    getAllEmployees().then((res) => console.log(res));
  }
  makeNewDepartment() {
    createDepartment().then((res) => console.log(res));
  }
  makeNewRole() {
    createRole().then((res) => console.log(res));
  }
  makeNewEmployee() {
    createEmployee().then((res) => console.log(res));
  }
  updateEmployee() {
    updateEmployee().then((res) => console.log(res));
  }
  disconnect() {
    connection.end();
  }
};
const db = new DB(connection);

module.exports = { db };
