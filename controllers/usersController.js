const { User } = require("../models");

exports.findCurrent = async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id }, "-password")
    .populate("notes")
    .cache({ key: req.user._id });
  res.status(202).send(user);
};
