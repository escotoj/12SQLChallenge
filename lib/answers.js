const {
  getAllDepartments, getAllRoles, getAllEmployees, createDepartment, createRole, createEmployee, updateEmployee
} = require("../controllers/dbController");
const connection = require("../config/connection");

// The whole organization is under the db constructer class and each funtions is rendered by the table fuction. 
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

//exporting to the index.js file for final rendering of the command line interface by using switch cases for the logic
module.exports = { db };
