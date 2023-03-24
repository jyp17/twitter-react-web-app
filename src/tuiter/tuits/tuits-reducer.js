import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk} from "../../services/tuits-thunk";

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {
        /*createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        updateLikes(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.likes = tuit.liked? tuit.likes - 1 : tuit.likes + 1;
            tuit.liked = !tuit.liked;
        }*/
    }
});

export const {createTuit, deleteTuit, updateLikes} = tuitsSlice.actions
export default tuitsSlice.reducer;