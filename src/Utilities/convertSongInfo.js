export const convertSongInfo = (songInfo) => {
    const output = {
        name: songInfo.name,
        musicSrc: songInfo.musicSrc || songInfo.fileUrl,
        cover: songInfo.cover || songInfo.thumbUrl,
        singer: songInfo.singer || "",
        lyric: songInfo.lyric || songInfo.lyrics
    };
    return output;
};