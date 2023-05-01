const connection = require('../config/connection.js');

const getAllRoles = async () => {
    const getAllRoles = 'SELECT roles.title, roles.salary, roles.department_id, department.dep_name FROM roles INNER JOIN department ON roles.department_id = department.id;';
  
      const [results] = await connection.promise().query(getAllRoles);
      // const [results] = await connection.query(getTodos);
      return results;
  };

  const getAllDepartments = async () => {
    const getAllDepertments =
      "SELECT * FROM department INNER JOIN roles ON roles.department_id = department.id;";
    const [results] = await connection.promise().query(getAllDepertments);
    return results;
  };

  module.exports = { getAllDepartments, getAllRoles };