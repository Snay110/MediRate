 
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}, // пока пусто
});


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;

