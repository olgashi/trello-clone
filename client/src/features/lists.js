import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../lib/ApiClient";
import { fetchBoard } from "./boards/boards";

const initialState = [];

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      // if (!state.length) {
      //   state.push(action.payload.lists);
      // }
      // console.log(action.payload)
      return state
        .filter((l) => l.boardId !== action.payload._id)
        .concat(action.payload.lists)
    })
  }
})

export default listSlice.reducer;