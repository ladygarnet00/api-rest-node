require('dotenv').config({ path: 'env.env' });
const data = require('../database/carton');
const httpStatusCodes = require('http-status');


const _get = async (req, res, next) => {
  res.setHeader('Content-type', 'application/json');
  
  const error = '';

  try {
    //const id = req.params.id;

    const result = await data.get();

    if (result.length === 0) {
      res.writeHead(httpStatusCodes.NOT_FOUND);
      res.end();
      return;
    }

    res.json(httpStatusCodes.OK, result);
    res.end();
    return;
  } catch (err) {
    console.log(err);
  }
}
  
const _post = async (req, res, next) => {
  const result = {}
  res.json(httpStatusCodes.OK, result);
  res.end();
  return;
}

const _put = async (req, res, next) => {
  const result = {}
  res.json(httpStatusCodes.OK, result);
  res.end();
  return;
}

const _delete = async (req, res, next) => {
  const result = {}
  res.json(httpStatusCodes.OK, result);
  res.end();
  return;
}


module.exports = {
  get: _get,
  post: _post,
  put: _put,
  delete: _delete
}