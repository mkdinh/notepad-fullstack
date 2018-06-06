const router = require("express").Router();
const { notesController } = require("../../controllers");
const { requireAuth } = require("../../middlewares/authentication");
// handle HTTP request to notes endpoints
//--------------------------------------------------------

router.get("/", requireAuth, notesController.index);
router.get("/:id", requireAuth, notesController.findOne);
router.post("/", requireAuth, notesController.create);
router.put("/:id", requireAuth, notesController.updateOne);
router.delete("/:id", requireAuth, notesController.deleteOne);

module.exports = router;
