const inquirer = require("inquirer");
const mysql = require("mysql2");

class CLI {
  runPrompts() {
    inquirer.prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "optionsList",
          choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"],
        },
        {
          type: "input",
          message: "What is the name of your department?",
          name: "departmentName",
        },
        {
          type: "input",
          message: "What is the name of your role?",
          name: "roleName",
        },
        {
          type: "input",
          message: "What is the salary of your role?",
          name: "roleSalary",
        },
        {
          type: "list",
          message: "What department does your role belong to?",
          name: "roleDepartment",
        },
        {
            type: "input",
            message: "What is the employees first name?",
            name: "employeeFirstName",
          },
          {
            type: "input",
            message: "What is the employees last name?",
            name: "employeeLastName",
          },
          {
            type: "list",
            message: "What is the employees role?",
            name: "employeeRole",
          }
          ,
        {
            type: "input",
            message: "Which employee would you like to update?",
            name: "employeeUpdate",
          },
          {
            type: "input",
            message: "Which role would you like to assign to this employee?",
            name: "employeeUpdateRole",
          }
      ])
    //   .then(({}) => {

    //   })
  }
};

module.exports = new CLI();

