# SQL: Employee Tracker

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation / Usage](#installation--usage)
- [Summary](#summary)
- [Links](#links)
- [Screenshots](#screenshots)

## Overview
The **Employee Tracker** application allows business owners and managers to efficiently view and manage departments, roles, and employees within their company. This tool simplifies organizational tasks such as tracking employee roles, managing departments, and planning business operations. By organizing this data digitally, businesses can improve their management, streamline decision-making, and save valuable time.

## Features
- **View all departments**
- **View all roles**
- **View all employees**
- **Add department(s)**
- **Add role(s)**
- **Add employee(s)**
- **Update employee(s) role(s)**

## Technologies Used

### Back-End
- **Node.js**: JavaScript runtime for server-side functionality.
- **PostgreSQL**: Relational database management system used to store and manage data.
- **Sequelize**: ORM for interacting with PostgreSQL databases.
- **dotenv**: Loads environment variables for secure configuration.

### Command-Line Tools
- **Inquirer.js**: CLI tool for user input prompts to interact with the database.

### Front-End
- **Console Interface**: The app runs as a CLI application, displaying options in the terminal.

## Installation / Usage
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/san1718/mc12-Employee_Tracker
   ```
2. **Set up Environment Variables**
    * Create a `.env` file in the root directory with:
        ```plaintext
        DB_USER=your_database_user
        DB_PASSWORD=your_database_password
        DB_HOST=localhost
        DB_DATABASE=your_database
        DB_PORT=3100
        ```
3. **Install Dependencies:**
    ```bash
    npm install
    ```
4. **Set Up Database**
    ```bash
    1. psql -U your_database_user
    Create schema and insert data:
    2. \i db/schema.sql
    3. \i db/seeds.sql
    4. \q # To quit, after data has been inserted
    ```
5. **Run Application:**
    ```bash
    node index.js
    ```
6. Follow prompts

## Summary
The **Employee Tracker** application helps users maintain better control over their company's employee data, including roles, departments, and employees. 
It provides valuable insights into the company's structure, making it easier to manage the business and plan for growth.

## Links
[Home](https://github.com/san1718/mc12-Employee_Tracker)
<br />
[Video Demo](https://drive.google.com/file/d/1xmy3G-m393A1RZIMYNqe9lKNkEcCkmFS/view?usp=drive_link)

## Screenshots
<img width="1000" alt="DemoVid" src="https://github.com/san1718/mc12-Employee_Tracker/blob/main/images/DemoVid12.gif">
<img width="1000" alt="Tables" src="https://github.com/san1718/mc12-Employee_Tracker/blob/main/images/Table.png">
