import { useState } from "react";

import { StyledHomePage, SlideComponent } from "src/Components";

export const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [playlists, setPlaylist] = useState([
        {
            id: 1,
            imagePath: "images/banner/banner.jpg"
        },
        {
            id: 2,
            imagePath: "images/banner/banner1.jpg"
        },
        {
            id: 3,
            imagePath: "images/banner/banner.jpg"
        },
        {
            id: 4,
            imagePath: "images/banner/banner1.jpg"
        },
        {
            id: 5,
            imagePath: "images/banner/banner.jpg"
        },
        {
            id: 6,
            imagePath: "images/banner/banner1.jpg"
        },
        {
            id: 7,
            imagePath: "images/banner/banner.jpg"
        },
    ]);
    return (
        <StyledHomePage>
            <SlideComponent title="Top bài hát mới nhất" playlists={playlists} />
            <SlideComponent title="Playlist được nghe nhiều nhất" playlists={playlists} />
            <SlideComponent title="Bài hát được nghe nhiều nhất" playlists={playlists} />
        </StyledHomePage>
    );
};