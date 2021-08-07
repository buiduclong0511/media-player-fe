import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowFormLogin: false
};

const formLogin = createSlice({
    name: "formLogin",
    initialState,
    reducers: {
        showFormLogin: (state) => {
            state.isShowFormLogin = true;
        },
        hiddenFormLogin: (state) => {
            state.isShowFormLogin = false;
        }
    }
});

export const formLoginSelector = state => state.formLogin;

export const {
    showFormLogin,
    hiddenFormLogin,
} = formLogin.actions;

export default formLogin.reducer;