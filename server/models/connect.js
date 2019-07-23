const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'expressdb'
});


connection.connect(function(error, result) {
    if(error) {
        console.log("My Errors",error);
    } else {
        console.log("My Success", result);
    }
})
    

module.exports = connection;