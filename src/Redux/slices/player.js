import { toast } from "react-toastify";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    playlist: [],
    currentSong: null,
    isPlaying: false,
    isClosed: false,
    listPlayedSongs: []
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
                    toast.success("Đã thêm vào danh sách phát!");
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
        },
        addPlayedSong: (state, action) => {
            state.listPlayedSongs.push(action.payload);
        },
        updateCurrentSong: (state, action) => {
            state.currentSong = action.payload;
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
    openPlayer,
    addPlayedSong,
    updateCurrentSong
} = player.actions;

export default player.reducer;