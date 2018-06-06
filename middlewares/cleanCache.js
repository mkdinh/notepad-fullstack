const { clearHash } = require("../services/cache");

module.exports = async (req, res, next) => {
  // await request to complete before handling cleaning cache
  await next();
  clearHash(req.user._id);
};
