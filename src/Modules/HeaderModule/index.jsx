import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { songApi } from "src/Api";

import { HeaderComponent } from "src/Components";
import { PATH_LOGIN } from "src/Routes";
import { useDebounce } from "src/Utilities";

export const HeaderModule = () => {
    const [keySearch, setKeySearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isBlur, setIsBlur] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isShowSearchResultBox, setIsShowSearchResultBox] = useState(false);
    const history = useHistory();

    const changeHeaderStatus = () => {
        if (window.scrollY > 50) {
            setIsBlur(true);
        } else {
            setIsBlur(false);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", changeHeaderStatus);

        return () => {
            document.removeEventListener("scroll", changeHeaderStatus)
        };
    }, []);

    const handleSearch = async () => {
        setIsSearching(true);
        try {
            const res = await songApi.getListSongs({
                q: keySearch
            });
            setSearchResult(res.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsSearching(false);
        }
    };

    useDebounce(() => {
        setSearchResult([]);
        if (keySearch.trim()) {
            handleSearch();
        }
    }, 500, [keySearch]);

    const handleClickLogin = () => {
        history.push(PATH_LOGIN);
    };

    const handleChangeKeySearch = (event) => {
        setKeySearch(event.target.value);
    };

    const handleShowSearchResultBox = () => {
        setIsShowSearchResultBox(true);
    };

    const handleHiddenSearchResultBox = () => {
        setIsShowSearchResultBox(false);
    };

    return (
        <HeaderComponent 
            isBlur={isBlur} 
            onClickLogin={handleClickLogin} 
            keySearch={keySearch}
            isSearching={isSearching}
            onChangeKeySearch={handleChangeKeySearch}
            searchResult={searchResult}
            isShowSearchResultBox={isShowSearchResultBox}
            onShowSearchResultBox={handleShowSearchResultBox}
            onHiddenSearchResultBox={handleHiddenSearchResultBox}
        />
    );
};