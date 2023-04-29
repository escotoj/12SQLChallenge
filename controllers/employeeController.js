const CLI = require('../lib/CLI.js');
const connection = require('../config/connection.js');

const createEmployee = async (req, res) => {
  const {first_name} = req.body;
  const {last_name} = req.body;
  try {
    const [ results, fields ] = await connection.query('INSERT INTO employee (first_name, last_name) VALUES (?);', [first_name, last_name]);
    res.json({
      results,
      fields,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllEmployees = async (req, res) => {
  const getAllEmployees = 'SELECT * FROM employee INNER JOIN users ON employee.role_id = role.id;'; // good for HW get all depart

  try {
    const [results] = await connection.query(getAllEmployees);
    // const [results] = await connection.query(getTodos);
    res.json(results);
  } catch (error) {
    res.status(500).json({error});
  };
};


module.exports = {
  createEmployee, getAllEmployees
};