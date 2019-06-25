const sql = require('mssql');
const secrets = require('../../common/secrets');

const _get = async () => {
  try {
    const config = await secrets.dbConfig;
    const pool = await sql.connect(config);
    const result = await pool.request()
      .query('SELECT TOP 10 * FROM [Carton]')

    sql.close();

    return result.recordset;

  } catch(err) {
    console.log('Error al obtener data: ', err);
  }
}

module.exports = {
  get: _get
}