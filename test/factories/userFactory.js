const User = require("../../models").User;
const { validUser } = require("../data/users");
const jwt = require("jwt-simple");
const keys = require("../../keys");

module.exports = async () => {
  const user = await User.create(validUser);
  user._password = validUser.password;

  const timestamp = new Date().getTime();
  // return token with an issue timestamp
  user._token = jwt.encode({ sub: user._id, iat: timestamp }, keys.SECRET);

  return user;
};
