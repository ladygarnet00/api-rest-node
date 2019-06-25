require('dotenv').config({ path: 'env.env' });


const express = require('express');
const app = express();
const sql = require("mssql");

const dbConfig = {
  user:  "sa",
  password: "Walmart2016$",
  server: "10.10.74.27",
  database: "dbOMSLiderCL"
};

const server = app.listen(process.env.API_PORT || 8080 , function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});

//CORS Middleware
app.use(function (req, res, next) {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});

const carton = require('./routers/v1/carton');
const pais = require('./routers/v1/pais');
carton.register(app);
pais.register(app);

let executeQuery = (res, query) => {
  

  sql.connect(dbConfig, (err) => {
    if (err) {
      console.log(err);
    }

    let request = new sql.Request();
    request.query(query, (err,recordset) => {
      if (err) {
        console.log(err);
      }

      res.send(recordset);
    });
  });
}
sql.close();

app.get("/api/carton3", function(req , res){
  let query = "select top 10 * from [Carton]";
  executeQuery (res, query);
});




