const CLI = require('../lib/CLI.js');
const connection = require('../config/connection.js');

const createDepartment = async (req, res) => {
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
  const getAllDepertments = 'SELECT * FROM department INNER JOIN role ON department.dep_name = dep_name;'; // good for HW get all depart

  try {
    const [results] = await connection.query(getAllDepertments);
    res.json(results);
  } catch (error) {
    res.status(500).json({error});
  };
};

module.exports = { createDepartment, getAllDepartments }