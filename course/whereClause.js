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
        
        // const sql = "Select name from softwares WHERE id=105";       Simple where clause
        const sql = "Select name from softwares WHERE name LIKE 'G%'";
        connection.query(sql,(error,result,fields)=>{
            if(error){
                console.log(error);
            }else{
                    console.log(result);
            }
        });
    }
});