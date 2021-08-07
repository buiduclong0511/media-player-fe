import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { songApi } from "src/Api";
import { StyledSearchResultPage } from "src/Components";
import { SearchResultSongItemModule } from "src/Modules";
import { play, replacePlaylist } from "src/Redux";
import { convertSongInfo } from "src/Utilities";

export const SearchResult = () => {
    const { keySearch } = useParams();
    const [listResults, setListResults] = useState([]);
    const dispatch = useDispatch();
    const fetchSongs = async () => {
        try {
            const res = await songApi.getListSongs({
                q: keySearch,
                all: true
            });
            setListResults(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchSongs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keySearch]);
    return (
        <StyledSearchResultPage>
            <div className="songs">
                <p className="heading">Bài hát:</p>
                {listResults.map((result, index) => {
                    const handleClickPlay = () => {
                        const payload = convertSongInfo(result);
                        dispatch(replacePlaylist([payload]));
                        dispatch(play());
                    };
                    return (
                        <SearchResultSongItemModule 
                            key={result._id} 
                            data={result} 
                            onClickPlay={handleClickPlay}
                            index={index}
                        />
                    );
                })}
            </div>
        </StyledSearchResultPage>
    );
};