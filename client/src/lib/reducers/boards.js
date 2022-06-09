// export default function boards(state = [], action) {
//   switch (action.type) {
//     case "FETCH_BOARDS_SUCCESS": {
//       return action.boards;
//     }
//     case "CREATE_BOARD_SUCCESS": {
//       const newBoard = action.board;
//       return state.concat(newBoard);
//     }
//     default:
//       return state;
//   }
// }
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../ApiClient";

const initialState = [];

export const fetchBoards = createAsyncThunk("boards/fetchBoards", async () => {
  const data = await apiClient.getBoards();
  return data;
});

export const createBoard = createAsyncThunk(
  "boards/createBoard",
  async (newBoard, callback) => {
    const data = await apiClient.createBoard(newBoard);
    if (callback) {
      callback;
    }
    return data;
  }
);

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBoards.fulfilled]: (state, action) => {
      return action.payload.reduce((acc, comm) => {
        //eslint-disable-next-line
        const { lists, ...boardWithoutLists } = comm;
        return acc.concat(boardWithoutLists);
      }, []);
    },
    [createBoard.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default boardSlice.reducer;
