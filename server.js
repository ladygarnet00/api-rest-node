require('dotenv').config({ path: 'env.env' });

const express = require('express');
const app = express();

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






