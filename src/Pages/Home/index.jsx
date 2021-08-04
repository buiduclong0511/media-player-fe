import { Column, Row } from "@mycv/mycv-grid";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { songApi } from "src/Api";
import { StyledHomePage, SongItem } from "src/Components";
import { concatPlaylist, play, replacePlaylist } from "src/Redux";

const ADD_TAG = "add";
const REPLACE_TAG = "replace";

export const Home = () => {
    const [songs, setSongs] = useState([]);
    const dispatch = useDispatch();

    const fetchSongs = async () => {
        try {
            const res = await songApi.getListSongs({ all: true });
            const topSongs = res.data.data.sort().slice(0, 6);
            setSongs(topSongs);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    const handleClickSong = (song, tag = REPLACE_TAG) => {
        const songProcess = {
            name: song.name,
            musicSrc: song.fileUrl,
            cover: song.thumbUrl,
            singer: song.singer,
            lyric: song.lyrics
        };
        if (tag === REPLACE_TAG) {
            dispatch(replacePlaylist([songProcess]));
        } else if (tag === ADD_TAG) {
            dispatch(concatPlaylist([songProcess]));
        }
        dispatch(play());
    };
    return (
        <StyledHomePage>
            <div className="listTopSongs">
                <h2 className="heading">Top bài hát nghe nhiều nhất</h2>
                <Row>
                    {songs.length ? songs.map(song => {
                        const onClickPlayBtn = () => handleClickSong(song);
                        const onClickAddBtn = () => handleClickSong(song, ADD_TAG);
                        return (
                            <Column
                                size={12}
                                sizeTablet={4}
                                sizeDesktop={2}
                            >
                                <SongItem 
                                    data={song} 
                                    onClickPlayBtn={onClickPlayBtn} 
                                    onClickAddBtn={onClickAddBtn}
                                />
                            </Column>
                        );
                    }) : <></>}
                </Row>
            </div>
        </StyledHomePage>
    );
};