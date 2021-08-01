import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const Avatar = ({
    imagePath = "",
    size = 35
}) => {
    return (
        <Container size={size}>
            {imagePath ? (
                <img src={imagePath} alt="" />
            ) : (
                <FaUserCircle />
            )}
        </Container>
    );
};

const Container = styled.div`
    width: ${p => p.size + 'px'};
    height: ${p => p.size + 'px'};
    font-size: ${p => p.size + 'px'};

    img {
        width: 100%;
        border-radius: 50%;
    }
`;