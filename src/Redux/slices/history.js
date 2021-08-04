import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    history: [],
    recently: []
};

const history = createSlice({
    name: "history",
    initialState,
    reducers: {
        updateHistory: (state, action) => {
            const songIndex = state.history.findIndex(song => action.payload.musicSrc === song.musicSrc);
            if (songIndex === -1) {
                state.history.unshift(action.payload);
            } else {
                state.history.splice(songIndex, 1);
                state.history.unshift(action.payload);
            }
            state.recently = state.history.slice(0, 4);
        }
    }
});

export const historySelector = state => state.history;

export const {
    updateHistory
} = history.actions;

export default history.reducer;