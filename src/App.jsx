import ReactJkMusicPlayer from "react-jinke-music-player";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-jinke-music-player/assets/index.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { Layout } from "src/Layout";
import { listPlayingSelector } from "src/Redux";


export const App = () => {
    const listPlaying = useSelector(listPlayingSelector).playlist;
    const isPlaying = useSelector(listPlayingSelector).isPlaying;
    const audioRef = useRef(null);
    
    const getAudioRef = (ref) => {
        audioRef.current = ref;
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
            />
        </div>
    );
};