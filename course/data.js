var mysql = require("mysql2");

// Create a connection.
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"jonathanlobo1995",
    database:"node_mysql",
});

//Connect to the backend.

connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Connection established successfully!!");
        
        //Create database : This is done only once at the beginning
        // const sql = "CREATE DATABASE node_mysql";
        // connection.query(sql,(error,result)=>{
        //     if(error){
        //         console.log(error);
        //     }else{
        //         console.log("Database Created");
        //     }
        // });

        //Create Table in database
        const sql = "CREATE TABLE softwares (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), cost DOUBLE)";

        connection.query(sql,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Table created successfully!!");
            }
        });
    }
});