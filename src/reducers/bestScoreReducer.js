import { createSlice } from "@reduxjs/toolkit";

const bestScoreSlice = createSlice({
  name: "bestScore",
  initialState: 0,
  reducers: {
    setBestScore: (state, action) => action.payload,
    resetBestScore: (state, action) => action.payload,
  },
});

export const { setBestScore, resetBestScore } = bestScoreSlice.actions;
const bestScoreReducer = bestScoreSlice.reducer;
export default bestScoreReducer;
