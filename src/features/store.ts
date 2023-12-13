import { configureStore } from "@reduxjs/toolkit";
import { reviloSlice } from "./slice";

export const shopFusionStore = configureStore({
  reducer: reviloSlice.reducer,
});

export type RootState = ReturnType<typeof shopFusionStore.getState>