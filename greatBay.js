var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //User Name
    user: "root",
    //password
    password: "",
    database: "GreatBay_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  
  createList();
  // updateList();
  // deleteList();
  // readList();
  // connection.end();
  // queryItems();
  connection.end();
});

var userOptions = function(name) {
	this.name = name;
	
}
var profiler = function() {
  inquirer.prompt([
    {
     type: "input",
     name: "name",
     message: "Enter your name: "
    },
    {
     type: "list",
     name: "welcome",
     message: "options",
     choices: [
         {
         	name: "Bid"
         }, 
         {
         	name: "Post"
         }
         ],
	 }
	  ]).then(function(answer) {
	  	var userOptions = new userOptions(answer.name);
	    console.log(answer.name);
	    
	    if(answer.name == "Bid"){ 
	      console.log("Get ready to bid...");
	    }
	    if(answer.name == "Post"){
	      console.log("Enter your item");
            
            function createList() {
              console.log("Insert New List...\n");
              var query = connection.query(
                "INSERT INTO items SET ?",
                {
                  items: "Cofee Cup",
                  tasks: "Drinking",
                  jobs: "some-job"
                },
                function(err, res) {
                  if (err) throw err;
                  console.log("items inserted!\n");
                  // Call updateProduct AFTER the INSERT completes
                  // updateSong();
                }
              );
            }
	    }
	  
	});
}
profiler();
userOptions();
  	
  	









