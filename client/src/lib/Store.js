import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards/boards";
import listReducer from "../features/lists";

const store = configureStore({
  reducer: {
    boards: boardsReducer,
    lists: listReducer,
  },
});

export default store;
