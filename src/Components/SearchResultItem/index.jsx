import { Column, Grid, Row } from "@mycv/mycv-grid";
import styled from "styled-components";
import Popper from '@material-ui/core/Popper';
import { useSelector } from "react-redux";

import { AddMenuModule } from "src/Modules";
import { playerSelector } from "src/Redux";
import { motion } from "framer-motion";
import { breakpoint } from "src/Utilities";

export const SearchResultSongItem = ({
    data = {},
    onClickPlay = () => {},
    onShowMenu = () => {},
    anchorEl = null,
    id = "",
    open = false
}) => {
    const currentSong = useSelector(playerSelector).currentSong || {};
    const isPlaying = data.fileUrl === currentSong.musicSrc;
    const animate = {
        scale: 1.3
    };
    return (
        <SongContainer>
            <Grid>
                <Row>
                    <Column
                        sizeDesktop={6}
                        sizeTablet={7}
                        size={12}
                    >
                        <div style={{display: 'flex'}}>
                            <div className="thumb">
                                <img src={data.thumbUrl} alt={data.name} />
                            </div>
                            <div className="info">
                                <h3 className="songName">{data.name}</h3>
                                <p className="singer">Ca sĩ: {data.singer}</p>
                                <p className="author">Sáng tác: {data.author}</p>
                                <div className="listControlsMobile listControls">
                                    <motion.span 
                                        className="icon playIcon" 
                                        onClick={onClickPlay}
                                        whileHover={animate}
                                    >
                                        <ion-icon name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}></ion-icon>
                                    </motion.span>
                                    <motion.span 
                                        className="icon addIcon" 
                                        onClick={onShowMenu}
                                        whileHover={animate}
                                    >
                                        <ion-icon id={id.toString()} name="add-circle-outline"></ion-icon>
                                        <Popper 
                                            id={id.toString()} 
                                            open={open} 
                                            anchorEl={anchorEl}
                                            transition={true}
                                        >
                                            <AddMenuModule data={data} />
                                        </Popper>
                                    </motion.span>
                                    <motion.span 
                                        className="icon heartIcon"
                                        whileHover={animate}
                                    >
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                    </Column>
                    <Column
                        sizeDesktop={3}
                        sizeTablet={2}
                        size={0}
                    >
                        <div className="listControls">
                            <motion.span 
                                className="icon playIcon" 
                                onClick={onClickPlay}
                                whileHover={animate}
                            >
                                <ion-icon name={isPlaying ? "pause-circle-outline" : "play-circle-outline"}></ion-icon>
                            </motion.span>
                            <motion.span 
                                className="icon addIcon" 
                                onClick={onShowMenu}
                                whileHover={animate}
                            >
                                <ion-icon id={id.toString()} name="add-circle-outline"></ion-icon>
                                <Popper 
                                    id={id.toString()} 
                                    open={open} 
                                    anchorEl={anchorEl}
                                    transition={true}
                                >
                                    <AddMenuModule data={data} />
                                </Popper>
                            </motion.span>
                            <motion.span 
                                className="icon heartIcon"
                                whileHover={animate}
                            >
                                <ion-icon name="heart-outline"></ion-icon>
                            </motion.span>
                        </div>
                    </Column>
                    <Column
                        sizeDesktop={3}
                        sizeTablet={3}
                        size={0}
                    >
                        <div className="subInfo flexCenter">
                            {data.listVisitorIds.length} lượt nghe
                        </div>
                    </Column>
                </Row>
            </Grid>
        </SongContainer>
    );
};

const SongContainer = styled.div`
    display: flex;
    padding: 10px 0; 

    .thumb {
        width: 100px;
        margin-right: 10px;

        img {
            width: 100%;
        }
    }

    .listControls {
        padding-top: 10px;

        .icon {
            margin: 0 5px;
            cursor: pointer;
            display: inline-block;

            ion-icon {
                font-size: 23px;
            }
        }

        .addIcon {
            position: relative;

            .addMenu {
                position: absolute;
                top: 100%;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }

    .listControlsMobile {
        display: none;

        ${breakpoint.breakMobile`
            display: block;
        `}
    }
`;