// maybe add this in a config file under connection.js something about a promise to make it asych?
require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection( 
  {
      host: 'localhost',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD, 
      database: process.env.DB_NAME
  }
); 

module.exports = connection;
