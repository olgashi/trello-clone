const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createList = (req, res, next) => {
  console.log(req.body)
  const errors = validationResult(req);
  console.log(errors)
  if (errors.isEmpty()) {
    // TODO update the board object with the new list id
    List.create({...req.body.list, boardId: req.body.boardId})
    .then(list => {
      res.json({
        title: list.title,
        boardId: list.boardId
      })
    })
    .catch(err => {
      next(new HttpError("Creating list failed, please try again", 500));
    })
  } else {
    return next(new HttpError("The title or boardId is empty", 404));
  }
}

exports.createList = createList;