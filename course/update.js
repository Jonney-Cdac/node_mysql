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
        
        const sql = "UPDATE softwares SET name='PHP' WHERE id=104";
        connection.query(sql,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                    console.log("The number of rows deleted: "+result.affectedRows);
            }
        });
    }
});