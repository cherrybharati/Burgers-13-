const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    database: "burgers",
    user: "root",
    password: "rootroot",
    port: 3306

})

connection.connect(function(err){
    if(err) throw err;

})

module.exports = connection