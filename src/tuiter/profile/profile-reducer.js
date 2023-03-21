import {createSlice} from "@reduxjs/toolkit";
import user from "./user.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: user
});

export default profileSlice.reducer;