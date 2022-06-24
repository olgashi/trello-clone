const {check} = require('express-validator');

exports.validateBoard = [check("board.title").not().isEmpty()];
exports.validateList = [check("boardId").not().isEmpty(), check("list.title").not().isEmpty()];
exports.validateListTitle = [check("title").not().isEmpty()];
exports.validateCard = [check("listId").not().isEmpty(), check("card.title").not().isEmpty()];
exports.validateComment = [check("cardId").not().isEmpty(), check("comment.text").not().isEmpty()]; 
