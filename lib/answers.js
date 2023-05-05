const {
  getAllDepartments, getAllRoles, getAllEmployees, createDepartment, createRole, createEmployee, updateEmployee
} = require("../controllers/dbController");
const connection = require("../config/connection");

// The whole organization is db
class DB {
  // retrieve datya from our database
  constructor(connnection) {
    this.connection = connnection;
  }
  findAllDepartments(restart) {
    getAllDepartments().then((res) => {
      console.table(res)
      return restart();
    })
    
  }

  findAllRoles(restart) {
    getAllRoles().then((res) => {
      console.table(res)
      return restart();
    })
  }
  
  findAllEmployees(restart) {
    getAllEmployees().then((res) => {
      console.table(res)
      return restart();
    })
  }
  makeNewDepartment() {
    createDepartment()

  }
  makeNewRole() {
    createRole()
  }
  makeNewEmployee() {
    createEmployee()
  }
  updateEmployee() {
    updateEmployee()
  }
  disconnect() {
    connection.end();
  }
};
const db = new DB(connection);

module.exports = { db };
