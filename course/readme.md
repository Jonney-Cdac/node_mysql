---

connection.query(1,2,3);

1=> The actual sql query.
2=> The variables that are needed to be put into the query.
3=> call back function with three arguments (error,result,fields)

Example:

const name_search = "A%";
const cost_search = "2000.51";
const sql_query = "Select \* from softwares where name LIKE ? AND cost = ?"; //Exclude the '/'

connection.query(sql_query,[name_search,cost_search],(error,result,fields)=>{

});
