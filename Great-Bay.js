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
  //afterConnection();
  //afterConnection();
  queryItems();
  connection.end();
});

function afterConnection() {
  connection.query("SELECT * FROM Items", function(err, res) {
    if (err) throw err;
    console.log(res);
    //connection.end();
  });
}

function queryItems() {
  connection.query("SELECT * FROM Items", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].items + " | " + res[i].tasks + " | " + res[i].jobs);
    }
    console.log("-----------------------------------");
  });
}