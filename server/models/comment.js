const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    text: {
      type: String,
    },
    cardId: {
      type: Schema.Types.ObjectId
    },
    createdAt: {
      type: String
    },
    updatedAt: {
      type: String
    },
  }
)

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment; 