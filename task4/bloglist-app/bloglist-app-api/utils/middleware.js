const logger = require('./logger');

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
  if(!authorization || !authorization.toLowerCase().startsWith('bearer '))
    return null;

  const extractedToken = authorization.substring(7);

  request.token = extractedToken;

  return next();

}

module.exports = { uknownEndPoint, errorHandler, tokenExtractor };
