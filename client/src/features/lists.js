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

export const updateListTitle = createAsyncThunk(
  "lists/updateListTitle",
  async (args) => {
    const {listId, title, callback} = args;
    const data = await apiClient.updateListTitle(listId, title);
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
    }),
    builder.addCase(updateListTitle.fulfilled, (state, action)=> {
      const currentList = state.find((l) => l._id === action.payload._id)
      currentList.title = action.payload.title;
    })
  }
})

export default listSlice.reducer;