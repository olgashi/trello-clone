const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Card = require('./card');

const ListSchema = new Schema({
      title: {
        type: String
      },
      boardId: {
        type: Schema.Types.ObjectId,
      },
      position: {
        type: Number,
      },
      cards: [
        {type: Schema.Types.ObjectId,
        ref: Card }
      ],
})

const List = mongoose.model('List', ListSchema);

module.exports = List;