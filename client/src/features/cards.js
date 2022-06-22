import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../lib/ApiClient";
import { fetchBoard } from "./boards/boards";
import lists from "./lists";

const initialState = [];

export const createCard = createAsyncThunk(
  "cards/createCard",
  async (args) => {
    const { listId, card, callback } = args;
    const data = await apiClient.createCard(listId, card);

    if (callback) {
      callback;
    }
    return data;
  }
)

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
    }),
    builder.addCase(createCard.fulfilled, (state, action) => {
      state.push(action.payload);
    })
  }
})

export default cardSlice.reducer;