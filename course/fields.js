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
        
        const sql = "Select * from softwares";        
        
        connection.query(sql,(error,result,fields)=>{
            if(error){
                console.log(error);
            }else{
                console.log(fields[1].name);                 //Fields that are needed are added.           
                console.log("--------------------");
                result.map((results)=>{
                    console.log(results.name);
                });
            }
        });
    }
});