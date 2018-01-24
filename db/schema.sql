CREATE DATABASE burger_db;
USE burger_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(100) NOT NULL,
devoured boolean NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burger (burger_name, devoured) VALUES ("Double Cheese Bacon", TRUE);
