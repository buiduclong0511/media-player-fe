import { Column, Row } from "@mycv/mycv-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { songApi } from "src/Api";
import { StyledHomePage, SongItemComponent } from "src/Components";
import { concatPlaylist, historySelector, openPlayer, play, replacePlaylist } from "src/Redux";
import { convertSongInfo } from "src/Utilities";

const ADD_TAG = "add";
const REPLACE_TAG = "replace";

export const Home = () => {
    const [songs, setSongs] = useState([]);
    const dispatch = useDispatch();
    const listRecently = useSelector(historySelector).recently;

    const fetchSongs = async () => {
        try {
            const res = await songApi.getListSongs({ all: true });
            const topSongs = res.data.data.sort().slice(0, 6).map(song => convertSongInfo(song));
            setSongs(topSongs);
        } catch (err) {
            console.log(err.response);
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    useEffect(() => {
        dispatch(openPlayer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickSong = (song, tag = REPLACE_TAG) => {
        if (tag === REPLACE_TAG) {
            dispatch(replacePlaylist([convertSongInfo(song)]));
        } else if (tag === ADD_TAG) {
            dispatch(concatPlaylist([convertSongInfo(song)]));
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
                                key={song._id}
                                size={12}
                                sizeTablet={4}
                                sizeDesktop={2}
                            >
                                <SongItemComponent
                                    data={song} 
                                    onClickPlayBtn={onClickPlayBtn} 
                                    onClickAddBtn={onClickAddBtn}
                                />
                            </Column>
                        );
                    }) : <></>}
                </Row>
            </div>
            <div className="listTopSongs">
                <h2 className="heading">Nghe gần đây</h2>
                <Row>
                    {listRecently.length ? listRecently.map(song => {
                        const onClickPlayBtn = () => handleClickSong(song);
                        const onClickAddBtn = () => handleClickSong(song, ADD_TAG);
                        return (
                            <Column
                                key={song._id}
                                size={12}
                                sizeTablet={6}
                                sizeDesktop={3}
                            >
                                <SongItemComponent
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