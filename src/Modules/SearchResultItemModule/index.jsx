import { useState } from "react";

import { SearchResultSongItem } from "src/Components";

export const SearchResultSongItemModule = ({
    key,
    data,
    onClickPlay,
    index = ""
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleShowMenu = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? index.toString() : undefined;
    return (
        <SearchResultSongItem
            key={key}
            data={data}
            onClickPlay={onClickPlay}
            onShowMenu={handleShowMenu}
            index={id}
            anchorEl={anchorEl}
            open={open}
        />
    );
};