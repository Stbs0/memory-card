import { configureStore } from "@reduxjs/toolkit";

import scoreReducer from "./scoreReducer";
import bestScoreReducer from "./bestScoreReducer";
console.log(bestScoreReducer);
console.log(scoreReducer);
const store = configureStore({
  reducer: {
    bestScoreReducer,
    scoreReducer,
  },
});
export default store;
