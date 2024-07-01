import { createSlice } from "@reduxjs/toolkit";

 const scoreSlice = createSlice({
    name: "score",
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        reset: (state) => {
            return 0;
        },
    },
});

export const { increment,reset } = scoreSlice.actions;

export default scoreSlice.reducer