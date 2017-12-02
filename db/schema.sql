DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT auto_increment,
    burger_name VARCHAR(100) NOT NULL,
    devoured Boolean,
    date timestamp,
    primary key (id)
);

