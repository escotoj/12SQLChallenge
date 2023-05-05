const inquirer = require("inquirer");
const { db } = require("./lib/answers");

// connection.connect ((err) => {
//   if (err) throw err;
// })

function runPrompts() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "optionsList",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Update Employee Role",
        ],
      },
      // ,
      // {
      //   type: "input",
      //   message: "What is the name of your department?",
      //   name: "departmentName",
      // },
      // {
      //   type: "input",
      //   message: "What is the name of your role?",
      //   name: "roleName",
      // },
      // {
      //   type: "input",
      //   message: "What is the salary of your role?",
      //   name: "roleSalary",
      // },
      // {
      //   type: "list",
      //   message: "What department does your role belong to?",
      //   name: "roleDepartment",
      // },
      // {
      //     type: "input",
      //     message: "What is the employees first name?",
      //     name: "employeeFirstName",
      //   },
      //   {
      //     type: "input",
      //     message: "What is the employees last name?",
      //     name: "employeeLastName",
      //   },
      //   {
      //     type: "list",
      //     message: "What is the employees role?",
      //     name: "employeeRole",
      //   }
      //   ,
      // {
      //     type: "input",
      //     message: "Which employee would you like to update?",
      //     name: "employeeUpdate",
      //   },
      //   {
      //     type: "input",
      //     message: "Which role would you like to assign to this employee?",
      //     name: "employeeUpdateRole",
      //   }
    ]).then(({ optionsList }) => {
      switch (optionsList) {
        case "View All Departments":
          // const department = new Department();
          db.findAllDepartments(runPrompts);
          break;
        case "View All Roles":
          db.findAllRoles(runPrompts);
          break;
        case "View All Employees":
          db.findAllEmployees(runPrompts);
          break;
        case "Add Department":
          db.makeNewDepartment(runPrompts);
          break;
        case "Add Role":
          db.makeNewRole(runPrompts);
          break;
        case "Add Employee":
          db.makeNewEmployee()
          break;
        case "Update Employee":
          db.updateEmployee();
          break;
        default:
      }
    });
}

runPrompts();
