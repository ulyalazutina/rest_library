const logMethodMiddleware = (request, response, next) => {
    console.log('Request Type:', request.method);
    next();
};
  
module.exports = logMethodMiddleware;