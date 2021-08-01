import { useState } from "react";

import { HeaderComponent } from "src/Components";

export const HeaderModule = () => {
    const [keySearch, setKeySearch] = useState("");
    const handleChangeKeySearch = (e) => {
        setKeySearch(e.target.value);
    };
    return (
        <HeaderComponent
            keySearch={keySearch}
            onChangeKeySearch={handleChangeKeySearch}
        />
    );
};