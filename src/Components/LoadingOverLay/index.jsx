import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

export const LoadingOverLay = () => {
    return (
        <Container className="flexCenter">
            <ScaleLoader color="#36D7B7" />
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 100000;
`;