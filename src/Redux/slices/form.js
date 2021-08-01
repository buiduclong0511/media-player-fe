import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formLogin: {
        isShow: false
    }
};

const form = createSlice({
    name: "form",
    initialState,
    reducers: {
        showFormLogin: (state) => {
            state.formLogin.isShow = true;
        },
        hideFormLogin: (state) => {
            state.formLogin.isShow = false;
        }
    }
});

export const { showFormLogin, hideFormLogin } = form.actions;

export default form.reducer;