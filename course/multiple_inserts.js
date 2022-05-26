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
        const sql = "INSERT INTO softwares (name ,cost,description) VALUES ?";
        const values = [
            ['SpringBoot',1521.24,"It is a IDE."],
        ];
        connection.query(sql,[values],(error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Multiple records inserted !!");
                console.log("Number of records inserted !!"+ result.affectedRows);
            }
        });
    }
});