import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    userInfo: null
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {

        }
    }
});

export const { login } = auth.actions;

export default auth.reducer;