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

            case 'exit':
                db.end();

            break;
        }
    });
};
/*
const viewAllEmployees = () => {
    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        init();
    });
};

addEmployee()

updateEmployeeRole()

const viewAllRoles = () => {
    db.query('SELECT * FROM roles',(err, results) =>{
        console.table(results);  
        prompt();  
    });
}

addRole()



const viewAllDepartments = () => {
    db.query('SELECT * FROM department',(err, results) =>{
        console.table(results);  
        prompt();  
    });
}

addDepartment()
*/
init ()