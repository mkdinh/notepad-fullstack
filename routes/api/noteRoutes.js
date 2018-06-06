const router = require("express").Router();
const { notesController } = require("../../controllers");
const { requireAuth } = require("../../middlewares/authentication");
const cleanCache = require("../../middlewares/cleanCache");
// handle HTTP request to notes endpoints
//--------------------------------------------------------

router.get("/", requireAuth, notesController.index);
router.get("/:id", requireAuth, notesController.findOne);
router.post("/", requireAuth, cleanCache, notesController.create);
router.put("/:id", requireAuth, cleanCache, notesController.updateOne);
router.delete("/:id", requireAuth, cleanCache, notesController.deleteOne);

module.exports = router;
