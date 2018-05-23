module.exports = function(user) {
  let properties = ["email", "password", "firstName", "lastName"];
  let dto = {};

  properties.forEach(prop => {
    if (user[prop]) dto[props] = user[prop];
  });

  return dto;
};
