// maybe add this in a config file under connection.js something about a promise to make it asych?
const mysql = require("mysql2");

const connection = mysql.createConnection( 
  {
      host: 'localhost',
      user: 'root',
      password: 'xxxxxx', // UPDATE WHEN FINAL PUSH
      database: 'headcount_inv'
  }
); // ADD PROMISE

module.exports = connection;
