const createMedia = require('./createMedia');

module.exports = (req, _res, next) => {
  const { body } = req;
  if (req.method === 'POST') {
    req.body = createMedia(body);
  }
  next();
};
