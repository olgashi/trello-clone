import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../lib/ApiClient";
import { fetchBoard } from "./boards/boards";

const initialState = [];

export const createList = createAsyncThunk(
  "lists/createList",
  async (args) => {
    const {boardId, title, callback} = args
    const data = await apiClient.createList(boardId, title);
    if (callback) {
      callback;
    }
    return data;
  }
)

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      return state
        .filter((l) => l.boardId !== action.payload._id)
        .concat(action.payload.lists)
    }),
    builder.addCase(createList.fulfilled, (state, action) => {
      state.push(action.payload);
    })
  }
})

export default listSlice.reducer;