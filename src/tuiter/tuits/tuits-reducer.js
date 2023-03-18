import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        updateLikes(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.likes = tuit.liked? tuit.likes - 1 : tuit.likes + 1;
            tuit.liked = !tuit.liked;
        }
    }
});

export const {updateLikes} = tuitsSlice.actions
export default tuitsSlice.reducer;