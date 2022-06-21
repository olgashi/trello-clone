import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../lib/ApiClient";
import { fetchBoard } from "./boards/boards";
import lists from "./lists";

const initialState = [];

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      const cardsOnBoard = action.payload.lists
        .map((l) => l.cards)
        .flat();
      cardsOnBoard.forEach((c) => {
        const found = state.find((existingCard) => existingCard._id === c._id);
        if (!found) {
          state.push(c);
        }
      })
    })

  }

})

export default cardSlice.reducer;