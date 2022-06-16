const Board = require("../models/board");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const getBoards = (req, res, next) => {
  Board.find({}, "title _id createdAt updatedAt").then((boards) => {
    res.json(boards);
  });
};

const createBoard = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Board.create(req.body.board)
      .then((board) => {
        res.json({
          title: board.title,
          _id: board._id,
          createdAt: board.createdAt,
          updatedAt: board.updatedAt,
        });
      })
      .catch((err) =>
        next(new HttpError("Creating board failed, please try again", 500))
      );
  } else {
    return next(new HttpError("The input field is empty.", 404));
  }
};

const getBoardById = (req, res, next) => {
  const { id } = req.params;

  if (mongoose.isValidObjectId(id)) {
    Board.findOne({ _id: id })
      .populate({
        path: 'lists',
        populate: { path: 'cards' }
      })
      .then((board) => {
        if (!board) {
          return res.json({
            error: "board id does not exist",
          })
        }
        return res.json(board);
      })
  } else {
    return res.json({
      error: "Invalid board id provided",
    })
  }

}

exports.getBoards = getBoards;
exports.createBoard = createBoard;
exports.getBoardById = getBoardById;
