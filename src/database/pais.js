const mysql = require('mysql');
const secrets = require('../../common/secrets');
const httpStatusCodes = require('http-status');

const _get = async (req, res) => {
  res.setHeader('Content-type', 'application/json');
  try {
    const config =  secrets.dbConfigMySql;
    const pool =  mysql.createConnection(config);
    
    pool.connect();
    
    let query = pool.query(
      {
        sql: 'SELECT * FROM Pais LIMIT 10'
      }
    );

    query.on('error', function(err) {
      throw err;
    });

    query.on('result', function(row) {
      res.status(httpStatusCodes.OK).json(row)
      res.end();
    });

    pool.end();

    

  } catch(err) {
    console.log('Error al obtener data: ', err);
  }
}


module.exports = {
  get: _get
}