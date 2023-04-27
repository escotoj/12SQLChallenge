INSERT INTO department (name)
VALUES ("Marketing"),
       ("TechOps"),
       ("Human Resources"),
       ("C-Suite");

INSERT INTO role (title, salary, department_id, manager_id)
VALUES ("CTO", "300000", 4),
       ("CFO", "300000", 4),
       ("SWE", "120000" 2),
       ("Sr. SWE", "120000" 2),
       ("Recruiter", "75000", 3),
       ("Sr. Recruiter", "100000", 3),
       ("Marketing Lead", "75000", 1),
       ("Marketing Manager", "115000", 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Ruth"),
       ("Jane", "Doe"),
       ("Will", "Smith"),
       ("Al", "Pacino"),
       ("Juan", "ToThree"),
       ("Bob", "DaBuilder"),;