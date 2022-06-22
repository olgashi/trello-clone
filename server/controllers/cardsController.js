const Card = require("../models/card");
const List = require("../models/list");
const HttpError = require("../models/httpError");
const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const getCardById = (req, res, next) => {
  // const errors = validationResult(req);

  const { id } = req.params;

  if (mongoose.isValidObjectId(id)) {
    Card.findOne({ _id: id })
      .then((card) => {
        if (!card) {
          next(new HttpError("Card was not found", 404))
        }
        return res.json(card);
      })
  } else {
    return next(new HttpError("Card id is invalid", 400));
  }
}

const createCard = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    Card.create({...req.body.card, listId : req.body.listId})
    .then(card => {
      req.card = card;
      next();
    })
    .catch(err => {
      next(new HttpError("Creating card failed, please try again", 500));
    })

  } else {
    return next(new HttpError("The title or listId is empty", 404));
  }
}

const addCardToList = (req, res, next) =>{
  const card = req.card;

  List.findOneAndUpdate(
    { _id: card.listId },
    { $push: {cards: card._id} }
    )
    .then(_ => res.json(card))
    .catch(error => 
      next(new HttpError("Adding card to list failed, please try again", 500))
    )
}

exports.getCardById = getCardById;
exports.createCard = createCard;
exports.addCardToList = addCardToList;