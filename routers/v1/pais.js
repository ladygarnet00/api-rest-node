const method = require('../../src/controllers/pais')

module.exports.register = (app) => {
  
  app.get("/api/pais", method.get);

};