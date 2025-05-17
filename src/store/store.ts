import { configureStore } from "@reduxjs/toolkit";
import clinnersReducer from "./clinnersSlice";

// Create a Redux store using Redux Toolkit
export const store = configureStore({
  reducer: {
    clinners: clinnersReducer,
  },
});

// RootState type for use with selectors
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch type for use with useDispatch
export type AppDispatch = typeof store.dispatch;