import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { songApi } from "src/Api";
import { StyledSearchResultPage, SearchResultSongItem } from "src/Components";

export const SearchResult = () => {
    const { keySearch } = useParams();
    const [listResults, setListResults] = useState([]);
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
                {listResults.map(result => <SearchResultSongItem data={result} key={result._id} />)}
            </div>
        </StyledSearchResultPage>
    );
};