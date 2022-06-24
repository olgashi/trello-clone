const Comment = require("../models/comment");
const Card = require("../models/card")
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");

const createComment = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    Comment.create(
      { ...req.body.comment, cardId: req.body.cardId }
    ).then(comment => {
      req.comment = comment;
      next();
    }).catch(err => {
      next(new HttpError("creating comment failed, please try again", 500));
    })
  } else {
    return next(new HttpError("the comment text or cardId is empty", 404))
  }
}

const addCommentToCard = (req, res, next) => {
  const comment = req.comment;
  Card.findOneAndUpdate(
    { _id: comment.cardId },
    { $push: { comments: comment._id }, $inc : {commentsCount : 1}} 
  ).then(_ => res.json(comment))
    .catch(_ =>
      next(new HttpError("Adding comment to card failed, please try again", 500))
    )

}

exports.createComment = createComment;
exports.addCommentToCard = addCommentToCard;

/**
 * {
  "cardId": 9,
  "comment": {
    "text": "This is my comment"
  }
}
 */