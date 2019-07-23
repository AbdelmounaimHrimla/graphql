const mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'expressdb'
});

return new Promise(
    function(resolve, reject){
        connection.connect(function(error, result) {
            if(error) {
                return reject(error);
            } else {
                return resolve(result);
            }
        })
    } 
).then(function() {
    console.log('My Connect => Success');
}).catch(function(err) {
    console.log('My Connect => Fail', err);
});

module.exports = connection;