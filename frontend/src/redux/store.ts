import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "./slices/colorSlice";

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
