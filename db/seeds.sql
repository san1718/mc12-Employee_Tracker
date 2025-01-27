INSERT INTO department (name) VALUES ('Engineering'), ('Sales'), ('Finance');

INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 80000, 1),
    ('Salesperson', 50000, 2),
    ('Accountant', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Jane', 'Doe', 1, NULL),
    ('John', 'Smith', 2, 1),
    ('Steven', 'Slim', 3, 1);
