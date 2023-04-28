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

const getAllRoles= async (req, res) => {
  const getAllRoles = 'SELECT * FROM role INNER JOIN employee ON role.title = title;';

  try {
    const [results] = await connection.query(getAllRoles);
    // const [results] = await connection.query(getTodos);
    res.json(results);
  } catch (error) {
    res.status(500).json({error});
  };
};

module.exports = { createRole, getAllRoles }