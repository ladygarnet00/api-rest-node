const method = require('../../src/controllers/carton')

module.exports.register = (app) => {
  
  // GET
  app.get("/api/carton", method.get);

  // GET BY
  app.get("/api/carton/id:", method.get);

  // POST
  app.post("/api/carton", method.post);

  // PUT
  app.put("/api/carton", method.put);

  // DELETE
  app.delete("/api/carton", method.delete);

};