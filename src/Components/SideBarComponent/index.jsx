import { motion } from "framer-motion";
import styled from "styled-components";

import { PATH_HOME } from "src/Routes";
import { SideBarItemComponent } from "src/Components";

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
        >
            <div className="logo flexCenter">
                <img src="images/logos/logo.png" alt="" />
            </div>
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
`;