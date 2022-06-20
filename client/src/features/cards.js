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
      return action.payload.lists
        .map((l) => l.cards)
        .flat();
    })

  }
})

export default cardSlice.reducer;