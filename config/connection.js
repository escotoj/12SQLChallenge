// maybe add this in a config file under connection.js something about a promise to make it asych?
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection( 
  {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, // UPDATE WHEN FINAL PUSH
      database: process.env.DB_NAME
  }
); // ADD PROMISE

module.exports = connection;
