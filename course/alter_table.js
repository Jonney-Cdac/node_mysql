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
        const sql = "ALTER TABLE softwares ADD COLUMN description VARCHAR(225)";

        connection.query(sql,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Table altered successfully!!");
            }
        });
    }
});