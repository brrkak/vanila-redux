import { createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: `toDosReducer`,
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { add, remove } = toDosSlice.actions;

export default toDosSlice.reducer;
