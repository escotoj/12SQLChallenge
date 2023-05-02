const connection = require('../config/connection.js');

const getAllRoles = async () => {
    const getAllRoles = 'SELECT roles.title, roles.salary, roles.department_id, department.dep_name FROM roles INNER JOIN department ON roles.department_id = roles.id;';
      const [results] = await connection.promise().query(getAllRoles);
      return results;
  };
  const getAllEmployees = async () => {
    const getAllEmployees =
    'SELECT employee.first_name, employee.last_name, employee.role_id, roles.title FROM employee INNER JOIN roles ON employee.manager_id = employee.id;';
    const [results] = await connection.promise().query(getAllEmployees);
    return results;
  };

  const getAllDepartments = async () => {
    const getAllDepartments =
      "SELECT * FROM department INNER JOIN roles ON roles.department_id = department.id;";
    const [results] = await connection.promise().query(getAllDepartments);
    return results;
};

const createDepartment = async () => {
  const createDepartment = 'INSERT INTO department (dep_name) VALUES (?);';
  const [results] = await connection.promise().query(createDepartment, [department]);
  return results;
}

const createRole = async () => {
  const createRole = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?);';
  const [results] = await connection.promise().query(createRole, [role.title]);
  return results;
}

const createEmployee = async () => {
  const createEmployee = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);';
  const [results] = await connection.promise().query(createEmployee, [employee.first_name, employee.last_name, role.id]);
  return results;
}

const updateEmployee = async () => {
  const updateEmployee = 'UPDATE employee SET role_id =? WHERE first_name =? AND last_name =?;';
  const [results] = await connection.promise().query(updateEmployee, [employee, employee.first_name, employee.last_name]);
  return results;
}



  module.exports = { getAllDepartments, getAllRoles, getAllEmployees, createDepartment, createRole, createEmployee, updateEmployee };