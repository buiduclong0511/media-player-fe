import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { PATH_HOME } from "src/Routes";
import { SideBarItemComponent } from "src/Components";
import { useSelector } from "react-redux";
import { playerSelector } from "src/Redux";

export const SideBarComponent = () => {
    const itemModelTop = [
        {
            iconName: "home",
            title: "Home",
            link: PATH_HOME
        },
        {
            iconName: "musical-notes",
            title: "Playlists",
            link: PATH_HOME
        },
        {
            iconName: "browsers",
            title: "Libraries",
            link: PATH_HOME
        },
    ];

    const itemModelBottom = [
        {
            iconName: "person",
            title: "Following",
            link: PATH_HOME
        },
    ];

    const isPlaying = useSelector(playerSelector).isPlaying;

    return (
        <Container
            initial={{
                x: -1000
            }}
            animate={{
                x: 0
            }}
            transition={{
                duration: .7
            }}
            isPlaying={isPlaying}
        >
            <Link to={PATH_HOME} className="logo flexCenter">
                <img src="images/logos/logo.png" alt="" />
                <span style={{ "--i": "1s" }} className="ringAnimate"></span>
                <span style={{ "--i": "2s" }} className="ringAnimate"></span>
                <span style={{ "--i": "3s" }} className="ringAnimate"></span>
            </Link>
            <div className="listItem">
                {itemModelTop.map((item, index) => {
                    return (
                        <SideBarItemComponent key={index} data={item} />
                    );
                })}
            </div>
            <div className="listItem listItemBottom">
                {itemModelBottom.map((item, index) => {
                    return (
                        <SideBarItemComponent key={index} data={item} />
                    );
                })}
            </div>
        </Container>
    );
};

const Container = styled(motion.div)`
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: 3px 0 10px rgba(0, 0, 0, .3);
    min-height: 100vh;
    position: sticky;
    top: 0;
    left: 0;

    .logo {
        padding-top: 5px;
        position: relative;

        .ringAnimate {
            position: absolute;
            display: inline-block;
            width: 40%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid ${p => p.theme.colors.gray_5};
            transform: scale(0.7);
            ${p => p.isPlaying ? "animation: scale 3s infinite var(--i);" : ""}
            z-index: -1;
        }

        img {
            width: 40%;
        }
    }

    .listItem {
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        padding-left: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid ${p => p.theme.colors.gray_3};

        &.listItemBottom {
            border-bottom: none;
            padding-top: 10px;
        }
    }

    @keyframes scale {
        from {
            transform: scale(0.9);
            opacity: 1;
        }

        to {
            transform: scale(1.5);
            opacity: 0;
        }
    }
`;