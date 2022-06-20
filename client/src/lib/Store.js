import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards/boards";
import listReducer from "../features/lists";
import cardReducer from "../features/cards"

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listReducer,
    cards: cardReducer,
  },
});

export default store;
