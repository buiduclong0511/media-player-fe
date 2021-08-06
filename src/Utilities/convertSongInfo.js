export const convertSongInfo = (songInfo) => {
    const output = {
        key: songInfo.key || songInfo.slug,
        name: songInfo.name,
        musicSrc: songInfo.musicSrc || songInfo.fileUrl,
        cover: songInfo.cover || songInfo.thumbUrl,
        singer: songInfo.singer || "",
        lyric: songInfo.lyric || songInfo.lyrics
    };
    return output;
};