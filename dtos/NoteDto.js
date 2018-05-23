module.exports = function(note) {
  let properties = ["title", "body", "expiration", "style"];
  let dto = {};

  properties.forEach(prop => {
    if (note[prop]) dto[props] = note[prop];
  });

  return dto;
};
