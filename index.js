// Importing required packages
// For loading .env variables
const dotenv = require('dotenv');
// For connecting to PostgreSQL
const { Pool } = require('pg');
// For CLI prompts
const inquirer = require('inquirer');
// For displaying tables in CLI
const cTable = require('console.table');

// Loads environment variables from .env
dotenv.config();

// Configure PostgreSQL connection using environment variables
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Main Menu function
const mainMenu = async () => {
    const { action } = await inquirer.prompt([
        {
            // Selection of choices
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update Employee Role',
                'Exit',
            ],
        },
    ]);

    switch (action) {
        case 'View All Departments':
            return viewDepartments();
        case 'View All Roles':
            return viewRoles();
        case 'View All Employees':
            return viewEmployees();
        case 'Add a Department':
            return addDepartment();
        case 'Add a Role':
            return addRole();
        case 'Add an Employee':
            return addEmployee();
        case 'Update Employee Role':
            return updateEmployeeRole();
        default:
            // Closes the database connection
            pool.end();
            console.log('Goodbye!');
    }
};

// Functions for each menu
// View departments
const viewDepartments = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM department');
        console.table(rows);
    } catch (err) {
        console.error('Error retrieving departments:', err);
    } finally {
        mainMenu();
    }
};

// View roles
const viewRoles = async () => {
    try {
        const { rows } = await pool.query(`
            SELECT role.id, role.title, department.name AS department, role.salary
            FROM role
            JOIN department ON role.department_id = department.id
        `);
        console.table(rows);
    } catch (err) {
        console.error('Error retrieving roles:', err);
    } finally {
        mainMenu();
    }
};

// View employees
const viewEmployees = async () => {
    try {
        const { rows } = await pool.query(`
            SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary,
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM employee
            JOIN role ON employee.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT JOIN employee AS manager ON employee.manager_id = manager.id
        `);
        console.table(rows);
    } catch (err) {
        console.error('Error retrieving employees:', err);
    } finally {
        mainMenu();
    }
};

// Add department
const addDepartment = async () => {
    const { name } = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'Enter the department name:' },
    ]);
    try {
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log(`Added department: ${name}`);
    } catch (err) {
        console.error('Error adding department:', err);
    } finally {
        mainMenu();
    }
};

// Add role
const addRole = async () => {
    const { title, salary, department_id } = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter the role title:' },
        { type: 'input', name: 'salary', message: 'Enter the role salary:' },
        { type: 'input', name: 'department_id', message: 'Enter the department ID:' },
    ]);
    try {
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
        console.log(`Added role: ${title}`);
    } catch (err) {
        console.error('Error adding role:', err);
    } finally {
        mainMenu();
    }
};

// Add employee
const addEmployee = async () => {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'Enter the employee first name:' },
        { type: 'input', name: 'last_name', message: 'Enter the employee last name:' },
        { type: 'input', name: 'role_id', message: 'Enter the role ID:' },
        { type: 'input', name: 'manager_id', message: 'Enter the manager ID (or press Enter for none):' },
    ]);
    try {
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id || null]);
        console.log(`Added employee: ${first_name} ${last_name}`);
    } catch (err) {
        console.error('Error adding employee:', err);
    } finally {
        mainMenu();
    }
};

// Update employee role
const updateEmployeeRole = async () => {
    const { employee_id, role_id } = await inquirer.prompt([
        { type: 'input', name: 'employee_id', message: 'Enter the employee ID to update:' },
        { type: 'input', name: 'role_id', message: 'Enter the new role ID:' },
    ]);
    try {
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
        console.log('Updated employee role.');
    } catch (err) {
        console.error('Error updating employee role:', err);
    } finally {
        mainMenu();
    }
};

// Starts the application
mainMenu();
