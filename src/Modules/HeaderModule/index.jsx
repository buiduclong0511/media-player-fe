import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { songApi } from "src/Api";

import { HeaderComponent } from "src/Components";
import { ENTER_KEY } from "src/Constant";
import { logout, showFormLogin } from "src/Redux";
import { PATH_ACCOUNT_SETTING, PATH_HOME, PATH_SEARCH_RESULT } from "src/Routes";
import { sleep, useDebounce } from "src/Utilities";

export const HeaderModule = () => {
    const [keySearch, setKeySearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isBlur, setIsBlur] = useState(false);
    const [searchResult, setSearchResult] = useState({
        songs: [],
        playlists: []
    });
    const [isShowSearchResultBox, setIsShowSearchResultBox] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

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
            setSearchResult((prevState) => {
                return {
                    ...prevState,
                    songs: res.data.data
                };
            });
        } catch (err) {
            if (!err.response) {
                toast.error("Lỗi kết nối!");
            }
        } finally {
            setIsSearching(false);
            setIsSearched(true);
        }
    };

    useEffect(() => {
        if (isSearched) {
            handleShowSearchResultBox();
        } else {
            handleHiddenSearchResultBox();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSearched]);

    useDebounce(() => {
        setSearchResult({
            songs: [],
            playlists: []
        });
        if (keySearch.trim()) {
            handleSearch();
        } else if (isSearched) {
            setIsSearched(false);
        }
    }, 500, [keySearch]);

    const handleShowLogin = () => {
        dispatch(showFormLogin());
    };

    const handleChangeKeySearch = (event) => {
        setKeySearch(event.target.value);
    };

    const handleShowSearchResultBox = () => {
        setIsFocused(true);
        if (!isSearched) return;
        setIsShowSearchResultBox(true);
    };

    const handleHiddenSearchResultBox = async () => {
        await sleep(200);
        setIsFocused(false);
        setIsShowSearchResultBox(false);
    };

    const handleSwitchToSearchResult = () => {
        history.push(PATH_SEARCH_RESULT + "/" + keySearch);
    };

    const handleKeyUpInput = (event) => {
        if (event.key === ENTER_KEY) {
            handleSwitchToSearchResult();
            handleHiddenSearchResultBox();
        }
    };

    const handleClickLogout = () => {
        dispatch(logout());
        const isAuthPage = window.location.pathname === PATH_ACCOUNT_SETTING;
        if (isAuthPage) {
            history.push(PATH_HOME);
        }
    };

    return (
        <>
            <HeaderComponent 
                isBlur={isBlur} 
                onClickLogin={handleShowLogin} 
                keySearch={keySearch}
                isSearching={isSearching}
                onChangeKeySearch={handleChangeKeySearch}
                searchResult={searchResult}
                isShowSearchResultBox={isShowSearchResultBox}
                onShowSearchResultBox={handleShowSearchResultBox}
                onHiddenSearchResultBox={handleHiddenSearchResultBox}
                isFocused={isFocused}
                onClickSearchAll={handleSwitchToSearchResult}
                onKeyUpInput={handleKeyUpInput}
                onClickLogout={handleClickLogout}
            />
        </>
    );
};