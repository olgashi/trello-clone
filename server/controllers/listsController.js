const List = require("../models/list");
const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    List.create({...req.body.list, boardId: req.body.boardId})
    .then(list => {
      req.list = list
      next();
    })
    .catch(err => {
      next(new HttpError("Creating list failed, please try again", 500));
    })
  } else {
    return next(new HttpError("The title or boardId is empty", 404));
  }
}

const addListToBoard = (req, res, next) => {
  const list = req.list;

  Board.findOneAndUpdate(
    { _id: list.boardId },
    { $push: {lists: list._id} }
    )
    .then(_ => {
      res.json({
        title: list.title,
        boardId: list.boardId
      })
    })
    .catch(error => console.log(error))
}

const updateListTitle = (req, res, next) => {
  const listId = req.params.id;
  const { title } = req.body;

  List.findOneAndUpdate(
    { _id: listId },
    { $set: {title: title }},
    { new: true }
  )
  .then(data => res.json(data))
  .catch(error => console.log(error))


  /*
  {
  "title": "Updated title",
  "position": 137882
}

*/
}

exports.updateListTitle = updateListTitle;
exports.addListToBoard = addListToBoard;
exports.createList = createList;