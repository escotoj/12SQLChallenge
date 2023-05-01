const CLI = require('../lib/CLI.js');
const connection = require('../config/connection.js');
// maybe create a config and connctionjs for better integration

const createRole = async (req, res) => {
  // pull out username from incoming request body / user input
  const {title} = req.body;
  const {salary} = req.body;
  const {department_id} = req.body;
  try {
    const [ results, fields ] = await connection.query('INSERT INTO employee (title, salary, department_id) VALUES (?);', [title, salary, department_id]);
    res.json({
      results,
      fields,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllRoles = async () => {
  const getAllRoles = 'SELECT roles.title, roles.salary, roles.department_id, department.dep_name FROM roles INNER JOIN department ON roles.department_id = department.id;';

    const [results] = await connection.promise().query(getAllRoles);
    // const [results] = await connection.query(getTodos);
    return results;
};

// module.exports = { createRole, getAllRoles }