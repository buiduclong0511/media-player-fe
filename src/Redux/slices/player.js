const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    playlist: [],
    isPlaying: false,
    isClosed: false
}

const player = createSlice({
    name: "player",
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
            state.playlist = [];
        },
        closePlayer: (state) => {
            state.isClosed = true;
        },
        openPlayer: (state) => {
            state.isClosed = false;
        }
    }
});

export const playerSelector = state => state.player;

export const {
    concatPlaylist,
    play,
    pause,
    replacePlaylist,
    refreshPlaylist,
    closePlayer,
    openPlayer
} = player.actions;

export default player.reducer;