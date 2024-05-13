const logNotFoundMiddleware = (request, response, next) => {
    response.status(404).send('Страница не найдена');
};
  
module.exports = logNotFoundMiddleware;