import { useSelector } from "react-redux";
import styled from "styled-components";

import { playerSelector } from "src/Redux";
import { useWindowDimensions } from "src/Utilities";

export const SongItemComponent = ({
    data = null,
    onClickPlayBtn = () => {},
    onClickAddBtn = () => {}
}) => {
    const playerRedux = useSelector(playerSelector);
    const listPlaying = playerRedux.playlist;
    const currentSong = playerRedux.currentSong || {};
    const isExisted = listPlaying.some(song => song.musicSrc === data.musicSrc);
    const isPlaying = data.musicSrc === currentSong.musicSrc;
    const { width } = useWindowDimensions();
    // console.log(data.musicSrc, currentSong.musicSrc);
    return (
        <Container>
            {width >= 744 ? (
                <div className="thumb" title={data.name}>
                    <img src={data.cover} alt={data.name} />
                    <div className="groupBtn flexCenter">
                        <button className="playBtn" onClick={onClickPlayBtn}>
                            <ion-icon name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}></ion-icon>
                        </button>
                        {!isExisted && (
                            <button className="addBtn" onClick={onClickAddBtn}>
                                <ion-icon name="add-circle"></ion-icon>
                            </button>
                        )}
                    </div>
                </div>
            ) : (
                <div className="wrapperMobile">
                    <div className="thumb" onClick={onClickPlayBtn}>
                        <img src={data.cover} alt={data.name} />
                    </div>
                    <div className="info" onClick={onClickPlayBtn}>
                        <h3 className="songName">{data.name}</h3>
                        <p className="singer">{data.singer}</p>
                    </div>
                    <div className="add flexCenter">
                        {!isExisted && (
                            <button className="addBtn" onClick={onClickAddBtn}>
                                <ion-icon name="add-circle"></ion-icon>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    padding: 10px;

    .thumb {
        cursor: pointer;
        position: relative;

        .groupBtn {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            background-color: rgba(0, 0, 0, .5);
            transition: 300ms;

            &:hover {
                opacity: 1;
            }
            
            ion-icon {
                font-size: 40px;

                @media (max-width: 1111px) {
                    font-size: 50px;
                }
            }
        }

        img {
            width: 100%;
        }
    }

    .wrapperMobile {
        display: flex;
        border-bottom: 1px solid ${p => p.theme.colors.gray_3};
        padding-bottom: 10px;

        .thumb {
            width: 50px;
            margin-right: 10px;

            img {
                width: 100%;
            }
        }

        .info {
            flex: 1;

            .songName {
                max-width: 185px;
            }
        }

        .add {
            .addBtn {
                font-size: 20px;
            }
        }
    }
`;