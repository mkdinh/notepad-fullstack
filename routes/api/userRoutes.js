const router = require("express").Router();
const { usersController } = require("../../controllers");
const { requireAuth } = require("../../middlewares/authentication");
// handle HTTP request to notes endpoints
//--------------------------------------------------------

router.get("/current", requireAuth, usersController.findCurrent);
router.get("/:id/notes", requireAuth, usersController.findUserNotes);

module.exports = router;
