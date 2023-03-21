import {createSlice} from "@reduxjs/toolkit";
import user from "./user.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: user,
    reducers: {
        updateProfile(state, action) {
            state.map((info) => {
                info.firstName = action.payload.firstName;
                info.lastName = action.payload.lastName;
                info.bio = action.payload.bio;
                info.website = action.payload.website;
                info.location = action.payload.location;
                info.dateOfBirth = action.payload.dateOfBirth;
            });
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;