import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { AddMenuComponent } from "src/Components";
import { concatPlaylist, playerSelector } from "src/Redux";
import { convertSongInfo } from "src/Utilities";

export const AddMenuModule = ({
    data
}) => {
    const dispatch = useDispatch();
    const playlist = useSelector(playerSelector).playlist;
    const onAddToCurrent = () => {
        const songInfo = convertSongInfo(data);
        const isExisted = playlist.some(song => song.musicSrc === songInfo.musicSrc);
        if (isExisted) {
            toast.warning("Bài hát đã có trong danh sách phát!");
        } else {
            dispatch(concatPlaylist([songInfo]));
        }
    };

    const onShowMenu = () => {
        console.log(data);
    };


    return (
        <AddMenuComponent
            onAddToCurrent={onAddToCurrent}
            onShowMenu={onShowMenu}
        />
    );
};