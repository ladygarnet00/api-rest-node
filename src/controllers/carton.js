require('dotenv').config({ path: 'env.env' });
const data = require('../database/carton');
const httpStatusCodes = require('http-status');


// GET without params. 
const _get = async (req, res, next) => {
  res.setHeader('Content-type', 'application/json');
  
  const error = '';

  try {

    const result = await data.get();

    if (result.length === 0) {
      res.writeHead(httpStatusCodes.NOT_FOUND);
      res.end();
      return;
    }

    res.status(httpStatusCodes.OK).json(result)
    res.end();
    return;
  } catch (err) {
    console.log(err);
  }
}

// GET with params
const _getByTrailerNumber = async (req, res, next) => {

  res.setHeader('Content-type', 'application/json');
  
  const error = '';

  try {
    const id = req.params.id 

    const result = await data.getByTrailerNumber(id);

    if (result.length === 0) {
      res.writeHead(httpStatusCodes.NOT_FOUND);
      res.end();
      return;
    }

    res.status(httpStatusCodes.OK).json(result)
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
  getByTrailerNumber: _getByTrailerNumber,
  post: _post,
  put: _put,
  delete: _delete
}