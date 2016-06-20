//Server side code
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port:3306, 
	user: 'root',
	password:'', 
	database:'bamazondb'

});

//connect() is a function that takes a call back
connection.connect( function(err){
	if (err) {
		throw err;
	}
console.log ('connected as id' + connection.threadID);
console.log ('********WELCOME TO BAMAZON********');
}); 