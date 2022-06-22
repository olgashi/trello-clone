const Card = require("../models/card");
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

exports.getCardById = getCardById;