const { User } = require("../models");

exports.findCurrent = async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id }, "-password").populate(
    "notes",
  );
  res.status(202).send(user);
};

exports.findUserNotes = async (req, res, next) => {
  const user = await User.findById({ _id: req.user._id }).populate("notes");
  res.status(202).send(user.notes);
};
