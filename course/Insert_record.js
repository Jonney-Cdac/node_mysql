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
        
        
        //Create record in Table
        const sql = "INSERT INTO softwares (id ,name ,cost) VALUES (101,'Node',2000.00)";

        connection.query(sql,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Inserted row successfully!!");
            }
        });
    }
});