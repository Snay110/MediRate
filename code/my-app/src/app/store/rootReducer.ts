import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/features/auth/api/baseApi";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
