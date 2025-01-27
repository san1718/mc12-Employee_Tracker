# SQL: Employee Tracker

## Table of Contents
* [Overview](#overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Installation / Usage](#installation--usage)
* [Summary](#summary)
* [Links](#links)
* [Screenshots](#screenshots)


## Overview
In this application, the users will be able to track their employees.
The users will be able view and manage the departments, roles, and employees in the company.
This will help organize and plan the business in a faster and efficient manner.

## Features
* View all departments
* View all roles
* View all employees
* Add department(s)
* Add role(s)
* Add employee(s)
* Update employee(s) role(s)

## Technologies Used
* Node.js
* PostgreSQL
* Inquirer.js
* dotenv
* Console

## Installation / Usage
1. Clone Repository:
    * git clone https://github.com/san1718/mc12-Employee_Tracker
2. Set up Environment Variables
    * Create a .env file in the root directory with:
        * DB_USER=your_database_user
        * DB_PASSWORD=your_database_password
        * DB_HOST=localhost
        * DB_DATABASE=your_database
        * DB_PORT=3100
3. Install Dependencies:
    * npm install
4. Set Up Database
    * psql -U your_database_user
    Create schema and insert data:
    * \i db/schema.sql
    * \i db/seeds.sql
    * (\q to quit, after data has been inserted)
5. Run Application:
    * node index.js
6. Follow prompts

## Summary
The Employee Tracker Application will help the users get a better hold of their management and organization data.
This application will show a better insight on the company structure, making it efficient to see information needed.

## Links
[Home](https://github.com/san1718/mc12-Employee_Tracker)
<br />
[Video Demo](https://drive.google.com/file/d/1xmy3G-m393A1RZIMYNqe9lKNkEcCkmFS/view?usp=drive_link)

## Screenshots
<img width="1000" alt="DemoVid" src="https://github.com/san1718/mc12-Employee_Tracker/blob/main/images/DemoVid12.gif">
<img width="1000" alt="Tables" src="https://github.com/san1718/mc12-Employee_Tracker/blob/main/images/Table.png">
