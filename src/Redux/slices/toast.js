import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    type: "success",
    message: "",
    autoHideDuration: 1500
};

const toast = createSlice({
    name: "toast",
    initialState,
    reducers: {
        showToast(state, action) {
            const payload = action.payload;
            state.open = true;
            if (payload.type) {
                state.type = payload.type;
            }
            state.message = payload.message;
            if (payload.autoHideDuration) {
                state.autoHideDuration = payload.autoHideDuration;
            }
        },
        hideToast(state) {
            state.open = false;
        }
    }
});

export const { showToast, hideToast } = toast.actions;

export default toast.reducer;