import { motion } from "framer-motion";
import styled from "styled-components";

export const SideBarComponent = () => {
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
`;