const logger = require('./logger');

const uknownEndPoint = (request, response) => {
    return response.status(404).send({message: 'uknown endpoint'});
};

const errorHandler = (error, request, response, next) => {
    logger.error(error);
    if (error.name === 'CastError') {
        return response.status(400).send({ message: 'malformatted id' })
      } else if (error.name === 'ValidationError') {
        return response.status(400).json({ message: error.message })
      }
      
    return next(error);
}

module.exports = { uknownEndPoint, errorHandler };
