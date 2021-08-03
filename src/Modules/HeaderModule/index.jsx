import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { HeaderComponent } from "src/Components";
import { PATH_LOGIN } from "src/Routes";

export const HeaderModule = () => {
    const [isBlur, setIsBlur] = useState(false);
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

    const handleClickLogin = () => {
        history.push(PATH_LOGIN);
    };

    return (
        <HeaderComponent isBlur={isBlur} onClickLogin={handleClickLogin} />
    );
};