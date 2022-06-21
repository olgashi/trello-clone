const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const { validateBoard, validateList, validateListTitle } = require("../validators/validators");

router.get("/boards", boardsController.getBoards);
router.get('/boards/:id', boardsController.getBoardById);
router.post("/boards", validateBoard, boardsController.createBoard);
router.put("/lists/:id", validateListTitle, listsController.updateListTitle);
router.post("/lists", validateList, listsController.createList, listsController.addListToBoard);

module.exports = router;
