const logger = require('./logger');
const { secret } = require('../config');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const uknownEndPoint = (request, response) => {
    return response.status(404).send({message: 'uknown endpoint'});
};

const errorHandler = (error, request, response, next) => {
    logger.error(error);
    if (error.name === 'CastError') {
        return response.status(400).send({ message: 'malformatted id' });
      } else if (error.name === 'ValidationError') {
        return response.status(400).json({ message: error.message });
      }
      else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({message: 'invalid token' });
      }
      else if(error.name === 'TokenExpiredError') {
        return response.status(401).json({message: 'token exprired' });
      }
      
    return next(error);
}

const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization');
  if(!authorization)
    return response.status(401).json({message: 'token missing'});

  if(!authorization.toLowerCase().startsWith('bearer '))
    return response.status(401).json({message: 'token invalid'});


  const extractedToken = authorization.substring(7);

  request.token = extractedToken;

  return next();

}

const userExtractor = async (request, response, next) => {

  const token = request.token;
  if(!token || token === 'null' || token === 'undefined')
    return response.status(401).json({message: 'token missing or invalid'});

  try {
    const decodedToken = jwt.verify(token, secret);    
    if(!decodedToken || !decodedToken?.id)
    return response.status(401).json({message: 'token missing or invalid'});

    const user = await User.findById(decodedToken.id);
    request.user = user;
    
    return next();
  } catch (error) {
    return next(error);
  }


}

module.exports = { uknownEndPoint, errorHandler, tokenExtractor, userExtractor };
