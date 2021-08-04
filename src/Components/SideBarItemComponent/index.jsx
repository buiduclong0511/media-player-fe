import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBarItemComponent = ({
    data = null
}) => {
    return (
        <Container
            whileHover={{
                scale: 1.2,
                x: 25,
                transition: {
                    duration: .4,
                    type: "spring"
                }
            }}
        >
            <NavLink to={data.link} activeClassName="isActived" className="link flexCenter" exact>
                <span className="icon">
                    <ion-icon name={data.iconName}></ion-icon>
                </span>
                <p className="text">
                    {data.title}
                </p>
            </NavLink>
        </Container>
    );
};

const Container = styled(motion.div)`
    font-size: 20px;

    .icon {
        margin-right: 10px;
    }

    .link {
        justify-content: flex-start;
        padding: 10px 0;
    }
`;