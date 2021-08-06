import { useSelector } from "react-redux";
import styled from "styled-components";

import { playerSelector } from "src/Redux";
import { useWindowDimensions } from "src/Utilities";

export const SongItemComponent = ({
    data = null,
    onClickPlayBtn = () => {},
    onClickAddBtn = () => {}
}) => {
    const listPlaying = useSelector(playerSelector).playlist;
    const isExisted = listPlaying.some(song => song.musicSrc === data.musicSrc);
    const { width } = useWindowDimensions();
    return (
        <Container>
            {width >= 744 ? (
                <div className="thumb" title={data.name}>
                    <img src={data.cover} alt={data.name} />
                    <div className="groupBtn flexCenter">
                        <button className="playBtn" onClick={onClickPlayBtn}>
                            <ion-icon name="play-circle-outline"></ion-icon>
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
                    <div className="thumb">
                        <img src={data.cover} alt={data.name} />
                    </div>
                    <div className="info">
                        <h3 className="songName">{data.name}</h3>
                        <p className="singer">{data.singer}</p>
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
            width: 70px;
            margin-right: 10px;

            img {
                width: 100%;
            }
        }
    }
`;