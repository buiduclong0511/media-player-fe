import ReactJkMusicPlayer from "react-jinke-music-player";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-jinke-music-player/assets/index.css'
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

import { Layout } from "src/Layout";
import { addPlayedSong, formLoginSelector, hiddenFormLogin, pause, play, playerSelector, replacePlaylist, updateCurrentSong, updateHistory } from "src/Redux";
import { convertSongInfo } from "src/Utilities";
import { songApi } from "src/Api";
import { LoginModalComponent } from "./Components/LoginModalComponent";


export const App = () => {
    const playerRedux = useSelector(playerSelector);
    const listPlaying = playerRedux.playlist;
    const isPlaying = playerRedux.isPlaying;
    const listPlayedSongs = playerRedux.listPlayedSongs;
    const isShowFormLogin = useSelector(formLoginSelector).isShowFormLogin;
    const audioRef = useRef(null);
    const dispatch = useDispatch();
    const volumeRef = useRef(null);
    
    const getAudioRef = (ref) => {
        audioRef.current = ref;
    };

    const handlePlaylistChange = (currentPlayId, audioLists, audioInfo) => {
        dispatch(replacePlaylist(audioLists));
    };

    const handleAudioPlay = (audioInfo) => {
        if (!volumeRef.current) {
            audioRef.current.volume = 0.99;
            volumeRef.current = audioRef.current.volume;
        }
        const songInfo = convertSongInfo(audioInfo);
        dispatch(updateHistory(songInfo));
        dispatch(updateCurrentSong(songInfo));
        dispatch(play());
    };

    const handleAudioProgress = (audioInfo) => {
        const progress = 100 / audioInfo.duration * audioInfo.currentTime;
        if (progress >= 50) {
            const isPlayed = listPlayedSongs.some(slug => slug === audioInfo.key);
            if (!isPlayed) {
                songApi.incrementView(audioInfo.key)
                .then(console.log)
                .catch(console.log)
                .finally(() => {
                    dispatch(addPlayedSong(audioInfo.key));
                });
            }
        }
    };

    const handleAudioPause = () => {
        dispatch(pause());
    };
    
    const handleHiddenLogin = () => {
        dispatch(hiddenFormLogin());
    };

    return (
        <div className="App">
            <Layout />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                draggable
            />
            <ReactJkMusicPlayer 
                quietUpdate 
                defaultPosition={{ right: 100, top: 100 }} 
                audioLists={listPlaying} 
                showDownload={false}
                glassBg
                mode="full"
                autoPlay={isPlaying}
                getAudioInstance={getAudioRef}
                clearPriorAudioLists
                showThemeSwitch={false}
                theme={"dark"}
                onAudioListsChange={handlePlaylistChange}
                onAudioPlay={handleAudioPlay}
                onAudioProgress={handleAudioProgress}
                onAudioPause={handleAudioPause}
            />
            {isShowFormLogin && (
                <LoginModalComponent
                    onHiddenLogin={handleHiddenLogin}
                />
            )}
        </div>
    );
};