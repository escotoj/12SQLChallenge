// this file contains the functions that operate the comand line of the app
const connection = require('../config/connection.js'); // database connection
const inquirer = require('inquirer');

const getAllRoles = async () => {
    const getAllRoles = 'SELECT roles.title, roles.salary, roles.department_id, department.dep_name FROM roles INNER JOIN department ON roles.department_id = department.id;';
      const [results] = await connection.promise().query(getAllRoles);
      return results;
  };
  const getAllEmployees = async () => {
    const getAllEmployees =
    'SELECT employee.first_name, employee.last_name, employee.role_id, roles.title FROM employee INNER JOIN roles ON employee.role_id = roles.id;';
    const [results] = await connection.promise().query(getAllEmployees);
    return results;
  };

  const getAllDepartments = async () => {
    const getAllDepartments =
      "SELECT * FROM department";
    const [results] = await connection.promise().query(getAllDepartments);
    return results;
};

const createDepartment = async () => {
inquirer.prompt(
  {
      type: "input",
      message: "What is the name of your department?",
      name: "departmentName",
    }

).then(async (answer) => {
  const createDepartment = 'INSERT INTO department (dep_name) VALUES (?);';
  const [results] = await connection.promise().query(createDepartment, [answer.departmentName]);
  console.log("New department added successfully");
  return results;
})
}

const createRole = async () => {
inquirer.prompt(
  [{
    type: "input",
    message: "What is the title of your role?",
    name: "roleName"
  },
  {
    type: "input",
    message: "What is the salary of your role?",
    name: "roleSalary"
  },
    {
      type: "list",
      message: "What department ID does your role belong to?",
      name: "roleDepartment",
      choices: [
        "1",
        "2",
        "3",
        "4"]
      }]
  ).then(async (answer) => {
    const createRole = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?);';
    const [results] = await connection.promise().query(createRole, [answer.roleName, answer.roleSalary, answer.roleDepartment]);
    console.log("New role added successfully");
    return results;
  })  
}

const createEmployee = async () => {
  inquirer.prompt(
    [{
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
                message: "What is the employees role ID?",
                name: "employeeRole",
                choices: [
                  "1",
                  "2",
                  "3",
                  "4"
              ]
              },
              {
                type: "list",
                message: "What is your managers ID?",
                name: "roleDepartment",
                choices: [
                  "1",
                  "2",
                  "3"]
                }]
      ).then(async (answer) => {
        const createEmployee = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);';
        const [results] = await connection.promise().query(createEmployee, [answer.employeeFirstName, answer.employeeLastName, answer.employeeRole, answer.roleDepartment]);
        console.log("New employee added successfully");
        return results;
      })

}

const updateEmployee = async () => {
  inquirer.prompt(
    [{
      type: "input",
      message: "What is the title of your role?",
      name: "roleName"
  
    },
    {
      type: "input",
      message: "What is the salary of your role?",
      name: "roleSalary"
    },
    {
      type: "list",
      message: "What department does your role belong to?",
      name: "roleDepartment",
      choices: [
        "Marketing",
        "TechOps",
        "Human Resources",
        "C-Suite"]
        }]
  )

  const updateEmployee = 'UPDATE employee SET role_id =? WHERE first_name =? AND last_name =?;';
  const [results] = await connection.promise().query(updateEmployee, [employee, employee.first_name, employee.last_name]);
  console.log("Employee updated successfully");
  return results;
}


// export each function to the answers.js file that contains further functions for rendering answers inputed
  module.exports = { getAllDepartments, getAllRoles, getAllEmployees, createDepartment, createRole, createEmployee, updateEmployee };