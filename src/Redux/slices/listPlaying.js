const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    playlist: [],
    isPlaying: false,
}

const listPlaying = createSlice({
    name: "listPlaying",
    initialState,
    reducers: {
        concatPlaylist: (state, action) => {
            const { payload } = action;
            payload.forEach(song => {
                const isExisted = state.playlist.some(item => item.musicSrc === song.musicSrc);
                if (!isExisted) {
                    state.playlist.push(song);
                }
            });
        },
        replacePlaylist: (state, action) => {
            const { payload } = action;
            state.playlist = payload;
        },
        play: (state) => {
            state.isPlaying = true;
        },
        pause: (state) => {
            state.isPlaying = false;
        },
        refreshPlaylist: (state) => {
            state.listPlaying = [];
        }
    }
});

export const listPlayingSelector = state => state.listPlaying;

export const {
    concatPlaylist,
    play,
    pause,
    replacePlaylist,
    refreshPlaylist
} = listPlaying.actions;

export default listPlaying.reducer;