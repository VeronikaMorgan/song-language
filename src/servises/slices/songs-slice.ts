import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TSong } from "../../types/prop-types";

type TState = {
  songs: TSong[] | null
}
const initialState = <TState>{
  songs: null
}
const SongsSlice = createSlice({
  name: "songs",
  initialState: initialState,
  reducers: {
    getSongs: (state, action: PayloadAction<TSong[]>) => {state.songs = action.payload}
  }
})

export const {getSongs} = SongsSlice.actions
export default SongsSlice.reducer