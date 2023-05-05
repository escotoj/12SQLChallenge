// mysql connection and dotenv are called here to connect and keep sensitive data secured
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
