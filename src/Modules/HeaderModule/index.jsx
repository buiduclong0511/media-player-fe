import { useState } from "react";
import { useDispatch } from "react-redux";

import { HeaderComponent } from "src/Components";
import { showFormLogin } from "src/Redux";

export const HeaderModule = () => {
    const [keySearch, setKeySearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const [result, setResult] = useState([
        {
            id: 0,
            songName: "It's Ain't Me",
            singer: "Kygo"
        },
        {
            id: 1,
            songName: "It's Ain't Me",
            singer: "Kygo"
        },
        {
            id: 2,
            songName: "It's Ain't Me",
            singer: "Kygo"
        },
        {
            id: 3,
            songName: "It's Ain't Me",
            singer: "Kygo"
        },
    ]);
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