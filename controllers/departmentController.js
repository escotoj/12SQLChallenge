const CLI = require('../lib/CLI.js');
const connection = require('../config/connection.js');
// maybe create a config and connctionjs for better integration

const createDepartment = async (req, res) => {
  // pull out username from incoming request body / user input
  const {dep_name} = req.body;
  try {
    const [ results, fields ] = await connection.query('INSERT INTO employee (dep_name) VALUES (?);', [dep_name]);
    res.json({
      results,
      fields,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllDepartments = async (req, res) => {
  // getting all todos
  // const getTodos = 'SELECT id AS todoID, text AS todo FROM todos;'; // good for HW get all departments, employees//

  // const groupedTodos = 'SELECT COUNT(id) AS todosCountByUser, text, completed, id, user_id  FROM todos GROUP BY user_id;';

  const getAllDepertments = 'SELECT * FROM department INNER JOIN role ON department.dep_name = dep_name;'; // good for HW get all depart

  try {
    const [results] = await connection.query(getAllDepertments);
    // const [results] = await connection.query(getTodos);
    res.json(results);
  } catch (error) {
    res.status(500).json({error});
  };
};

module.exports = { createDepartment, getAllDepertments }