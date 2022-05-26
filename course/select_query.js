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
        const sql = "Select * from softwares";
        
        connection.query(sql,(error,result)=>{
            if(error){
                console.log(error);
            }else{
                console.log(result);
                // console.log(result[5]);  For a particular row
                //console.log(result[5].name+"|"+result[5].description);
            }
        });
    }
});