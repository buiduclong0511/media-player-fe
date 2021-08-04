import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { songApi } from "src/Api";

import { HeaderComponent, LoginModalComponent } from "src/Components";
import { useDebounce } from "src/Utilities";

export const HeaderModule = () => {
    const [keySearch, setKeySearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isBlur, setIsBlur] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [isShowSearchResultBox, setIsShowSearchResultBox] = useState(false);
    const [isSearched, setIsSearched] = useState(false);
    const [isShowLogin, setIsShowLogin] = useState(false);
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
        setSearchResult([]);
        if (keySearch.trim()) {
            handleSearch();
        } else if (isSearched) {
            setIsSearched(false);
        }
    }, 500, [keySearch]);

    const handleToggleLogin = () => {
        setIsShowLogin(prevState => !prevState);
    };

    const handleChangeKeySearch = (event) => {
        setKeySearch(event.target.value);
    };

    const handleShowSearchResultBox = () => {
        if (!isSearched) return;
        setIsShowSearchResultBox(true);
    };

    const handleHiddenSearchResultBox = () => {
        setIsShowSearchResultBox(false);
    };

    return (
        <>
            <HeaderComponent 
                isBlur={isBlur} 
                onClickLogin={handleToggleLogin} 
                keySearch={keySearch}
                isSearching={isSearching}
                onChangeKeySearch={handleChangeKeySearch}
                searchResult={searchResult}
                isShowSearchResultBox={isShowSearchResultBox}
                onShowSearchResultBox={handleShowSearchResultBox}
                onHiddenSearchResultBox={handleHiddenSearchResultBox}
            />
            {isShowLogin && (
                <LoginModalComponent
                    onToggleLogin={handleToggleLogin}
                />
            )}
        </>
    );
};