import { useState } from "react";
import { useDispatch } from "react-redux";

import { HeaderComponent } from "src/Components";
import { showFormLogin } from "src/Redux";
import { useDebounce } from "src/Utilities";
import { songApi } from "src/Api";
import { useEffect } from "react";

export const HeaderModule = () => {
    const [keySearch, setKeySearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [result, setResult] = useState([]);
    let timeout = null;
    const handleChangeKeySearch = (e) => {
        setIsSearching(true);
        if (timeout) {
            clearInterval(timeout);
        }
        setKeySearch(e.target.value);
        timeout = setTimeout(() => {
            setIsSearching(false);
        }, 2000);
    };
    const handleClickLoginBtn = () => {
        dispatch(showFormLogin());
    };
    const searchSong = () => {
        if (keySearch.trim()) {
            setIsSearching(true);
            songApi.getListSongs({
                q: keySearch
            })
            .then(res => {
                setResult(res.data.data);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsSearching(false);
            });
        }
    };
    useDebounce(searchSong, 500, [keySearch]);

    const clearListResult = () => {
        if (!keySearch.trim()) {
            setResult([]);
        }
    }
    useEffect(clearListResult, [keySearch]);
    return (
        <HeaderComponent
            keySearch={keySearch}
            onChangeKeySearch={handleChangeKeySearch}
            result={result}
            isSearching={isSearching}
            onClickLoginBtn={handleClickLoginBtn}
        />
    );
};