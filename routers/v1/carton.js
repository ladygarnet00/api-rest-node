const method = require('../../src/controllers/carton')
const httpStatusCodes = require('http-status');
module.exports.register = (app) => {
  
  // GET
  app.get("/api/carton", method.get);

  // GET BY
  app.get("/api/carton/trailer/:id", method.getByTrailerNumber);
  // app.get("/api/carton/trailer/:id", () => {
  //   res.status(httpStatusCodes.OK).json({'id': 1, 'description': 'caro'})
  // });

  // POST
  app.post("/api/carton", method.post);

  // PUT
  app.put("/api/carton", method.put);

  // DELETE
  app.delete("/api/carton", method.delete);

};