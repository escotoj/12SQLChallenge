// const CLI = require("../lib/CLI.js");
const connection = require("../config/connection.js");

const createDepartment = async (req, res) => {
  const { dep_name } = req.body;
  try {
    const [results, fields] = await connection.query(
      "INSERT INTO employee (dep_name) VALUES (?);",
      [dep_name]
    );
    res.json({
      results,
      fields,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllDepartments = async () => {
  const getAllDepertments =
    "SELECT * FROM department INNER JOIN roles ON roles.department_id = department.id;";
  const [results] = await connection.promise().query(getAllDepertments);
  return results;
};

module.exports = { createDepartment, getAllDepartments };
