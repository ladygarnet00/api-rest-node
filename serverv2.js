//Initiallising node modules
let express = require("express");
let bodyParser = require("body-parser");
let sql = require("mssql");
let app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});

//Setting up server
 let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
 });

//Initiallising connection string
let dbConfig = {
  user:  "sa",
  password: "Walmart2016$",
  server: "10.10.74.27",
  database: "dbOMSLiderCL"
};

//Function to connect to database and execute query
let  executeQuery = function(res, query){             
  sql.connect(dbConfig, function (err) {
      if (err) {   
        console.log("Error while connecting database :- " + err);
        res.send(err);
      }
      else 
      {
        // create Request object
        var request = new sql.Request();
        // query to the database
        request.query(query, function (err, res) {
          if (err) {
            console.log("Error while querying database :- " + err);
            res.send(err);
          }
          else {
            //res.send(res);
            return res.recordset;
          }
        });
      }
  });
}

//GET API
app.get("/api/user", function(req , res){
  let query = "select top 10 * from [Carton]";
  return executeQuery (res, query);
});

// //POST API
// app.post("/api/user", function(req , res){
//   let query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password”);
//   executeQuery (res, query);
// });

// //PUT API
// app.put("/api/user/:id", function(req , res){
//   let query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
//   executeQuery (res, query);
// });

// // DELETE API
// app.delete("/api/user /:id", function(req , res){
//   let query = "DELETE FROM [user] WHERE Id=" + req.params.id;
//   executeQuery (res, query);
// });