const router = require("express").Router();
const noteRoutes = require("./noteRoutes");
const userRoutes = require("./userRoutes");

// handle different API endpoints
//--------------------------------------------------------
router.use("/notes", noteRoutes);
router.use("/users", userRoutes);
module.exports = router;
