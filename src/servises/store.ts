import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import songsReducer from './slices/songs-slice';

const reducer = combineReducers({
  songs: songsReducer
})

export const store = configureStore({
  reducer: reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch