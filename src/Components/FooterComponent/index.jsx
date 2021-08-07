import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { breakpoint } from "src/Utilities";
import { PATH_HOME } from "src/Routes";

export const FooterComponent = () => {
    const itemsModel = [
        {
            iconName: "home",
            title: "Home",
            link: PATH_HOME
        },
        {
            iconName: "browsers",
            title: "Libraries",
            link: PATH_HOME
        },
        {
            iconName: "person",
            title: "Following",
            link: PATH_HOME
        },
        {
            iconName: "cloud-upload",
            title: "Upload",
            link: PATH_HOME
        },
    ];
    return (
        <Container className="flexCenter">
            {itemsModel.map((item, index) => {
                return (
                    <Item key={index} to={item.link} activeClassName="active" exact>
                        <ion-icon name={item.iconName}></ion-icon>
                        <span className="text">{item.title}</span>
                    </Item>
                );
            })}
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
    background-color: ${p => p.theme.colors.main};
    
    ${breakpoint.breakMobile`
        display: flex;
    `}
`;

const Item = styled(NavLink)`
    padding: 15px 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    ion-icon {
        font-size: 20px;
    }
    
    .text {
        margin-top: 7px;
    }
`;