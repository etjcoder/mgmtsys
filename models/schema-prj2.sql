DROP DATABASE IF EXISTS project2_db;
CREATE DATABASE project2_db;

USE project2_db;

SELECT * FROM jobsites;

SELECT * FROM jobs;

SELECT * FROM supervisors;

INSERT INTO jobs (supervisor_id, jobsite_id, project_bid, project_name, hours, workers, materialcosts, jobcomments) VALUES (1, 3, 4000, "LSCHS 8-29",4, 3, 1200, "This job was completed with 4 yards of mulch and 4 gallons of gas");
INSERT INTO jobs (supervisor_id, jobsite_id, project_bid, project_name, hours, workers, materialcosts, jobcomments) VALUES (1, 1, 5000, "Pennovation 8-29",5, 4, 1600, "This job was completed with 5 yards of mulch and 4 gallons of gas");
INSERT INTO jobs (supervisor_id, jobsite_id, project_bid, project_name, hours, workers, materialcosts, jobcomments) VALUES (2, 2, 3000, "FS 8-29",2, 1, 1300, "This job was completed with 4 yards of mulch and 3 gallons of gas");

INSERT INTO supervisors (supervisor_name, specialties, jobs_expenses, jobs_revenue, jobs_profits) VALUES ("Jack Hamill", "Hardscaping", 2800, 9000, 6200);
INSERT INTO supervisors (supervisor_name, specialties, jobs_expenses, jobs_revenue, jobs_profits) VALUES ("Jordan Kane", "Landscaping, Gardening", 2700, 5000, 2300);
INSERT INTO supervisors (supervisor_name, specialties, jobs_expenses, jobs_revenue, jobs_profits) VALUES ("Thomas Lynch", "Aquascaping", 3400, 6000, 2600);
SELECT * FROM supervisors;


INSERT INTO jobsites (jobsite_name, address, primary_contact, phone_number, email, location_expenses, location_revenue, location_profits) VALUES ("Pennovation Center", "123 Main Street Phila, PA 19128", "John Thomas", "610-555-7895", "jthomas@gmail.com", 3000, 7000, 4000);
INSERT INTO jobsites (jobsite_name, address, primary_contact, phone_number, email, location_expenses, location_revenue, location_profits) VALUES ("Franklin Square", "456 Main Street Phila, PA 19128", "Tim Evans", "215-555-7895", "tevans@gmail.com", 4000, 9000, 5000);
INSERT INTO jobsites (jobsite_name, address, primary_contact, phone_number, email, location_expenses, location_revenue, location_profits) VALUES ("LaSalle College", "789 Main Street Phila, PA 19128", "Larry Johnson", "484-555-7895", "ljohnson@gmail.com", 5000, 10000, 5000);
SELECT * FROM jobsites;

INSERT INTO customers (customer_name, customer_email, customer_phone, customer_address, acreage, customer_description, pricerange) VALUES ("Evan Cleary", "evanjcleary@gmail.com", "610-299-9918", "2", "I need my grass mowed", "$0-$1,000");
INSERT INTO customers (customer_name, customer_email, customer_phone, customer_address, acreage, customer_description, pricerange) VALUES ("James Johnson", "jjohnson@gmail.com", "610-717-2929", "4", "I need flowers planted", "$1,000-$2,500");
INSERT INTO customers (customer_name, customer_email, customer_phone, customer_address, acreage, customer_description, pricerange) VALUES ("Sallie Mays", "salliemay@gmail.com", "610-555-2191", "3", "I need some hardscaping done", "$5,000 - $7,500");
SELECT * FROM customers;