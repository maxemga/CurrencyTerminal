import { combineReducers, configureStore } from "@reduxjs/toolkit";
import directionSlice from "./directions/slice";

const rootReducer = combineReducers({
  directions: directionSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
