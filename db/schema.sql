DROP DATABASE IF EXISTS headcount_inv;
CREATE DATABASE headcount_inv;

USE headcount;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);