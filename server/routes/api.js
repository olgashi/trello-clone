const express = require("express");
const router = express.Router();
const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const commentsController = require("../controllers/commentsController");
const { validateBoard, validateList, validateListTitle, validateCard, validateComment } = require("../validators/validators");

router.get("/boards", boardsController.getBoards);
router.get('/boards/:id', boardsController.getBoardById);
router.post("/boards", validateBoard, boardsController.createBoard);
router.put("/lists/:id", validateListTitle, listsController.updateListTitle);
router.post("/lists", validateList, listsController.createList, listsController.addListToBoard);
router.get("/cards/:id", cardsController.getCardById);
router.post("/cards", validateCard, cardsController.createCard, cardsController.addCardToList);
router.post("/comments", validateComment, commentsController.createComment, commentsController.addCommentToCard)

module.exports = router;
