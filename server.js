const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER, 
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
);

function init () {
    inquirer
    .prompt(
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
            'View All Employess',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Departments',
            'Exit'
        ],
        }
    ).then(answers => {
        switch(answers.choices){
            case 'View all employees':
                viewAllEmployees();
            break;

            case 'Add Employee':
                addEmployee();
            break;

            case 'Update Employee Role':
                updateEmployeeRole();
            break;
            
            case 'View all roles':
                viewAllRoles();
            break;

            case 'Add role':
                addRole();
            break;

            case 'View all departments':
                viewAllDepartments();
            break;

            case 'Add department':
                addDepartment();
            break;

            case 'Quit':
                db.end();
                console.log('See you next time');
            break;
        }
    });
};

viewEmployees()

addEmployee()

updateEmployeeRole()

addRole()

viewAllRoles()

viewAllDepartments()

addDepartment()

init ()