CREATE DATABASE IF NOT exists login;

USE login;

CREATE TABLE IF NOT EXISTS accounts (
id int(11) NOT NULL AUTO_INCREMENT,
username varchar(50) NOT NULL,
password varchar(255) NOT NULL,
email varchar(100) NOT NULL,
birthday date,
PRIMARY KEY (id)
);

INSERT INTO accounts (id, username, password, email, birthday) VALUES (1, 'test', 'test', 'test@test.com', DATE('1983-07-13'));
INSERT INTO accounts (id, username, password, email, birthday) VALUES (2, 'rick.carnes@gmail.com', 'Thunder80!', 'rick.carnes@gmail.com', DATE('1980-06-07'));
SELECT * from accounts;