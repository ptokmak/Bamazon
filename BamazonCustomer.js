var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '******',
  database: 'bamazondb'
})


connection.connect(function(err) {
  if (err) throw err;
    //console.log ('connected as id' + connection.threadID);
    console.log(" ");
	console.log ('********WELCOME TO BAMAZON********');
	console.log ("ID" +" | "+ "ProductName"+ " | "+" Department" +" | "+"Price");
	console.log(" ");	
});



//Start purchase function
purchase();

function purchase(){
  connection.query('SELECT * FROM Products',function(err,res){
  	//console.log(" ");
  for(var i=0;i<res.length;i++){
  	
	console.log(res[i].ItemID+" | "+res[i].ProductName+" | "+res[i].DepartmentName+" | "+res[i].Price);
	} 

    console.log("********************************");

})

     inquirer.prompt([{
        type: 'input',
        message: 'Please enter the product ID to purchase:',
        name: 'itemId'
       },{
       	type:'input',
       	message: 'Please enter quantity',
       	name: 'quantity'
       }]).then(function (answers) {
        
        connection.query("SELECT * FROM Products WHERE ItemID = ?", answers.itemId, function(err,res){
          if(err) throw err;          
  
             // Stock Quantity Check
            if (answers.quantity > res[0].StockQuantity){
            	console.log(" ");
            	console.log("Insufficient quantity!: There are only "+ res[0].StockQuantity+" left in stock!" );
            
            purchase();
          } 
          // Total Cost calculate
          else{
            var total = answers.quantity * res[0].Price 

            console.log(" ");
            console.log("Purchase Summary: " +answers.quantity + " " + res[0].ProductName + "." );

            console.log("Your total is " + " $" +total);

            console.log("Thank you for shopping at BAMAZON!");

            //updates stock
            connection.query('UPDATE Products SET StockQuantity = "'+(res[0].StockQuantity - answers.quantity)+'" WHERE ProductName = "'+answers.itemId+'"');
           
          }      

        })

});
}