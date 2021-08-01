import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";

export const LoadingOverlayComponent = () => {
    return (
        <Container className="flexCenter">
            <div className="loader">
                <HashLoader color="#7200A1" size={50} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    z-index: 5;
`;