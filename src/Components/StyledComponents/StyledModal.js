import styled from "styled-components";

export const StyledModal = styled.div`
    z-index: 4;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

export const StyledModalOverLay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
`;

export const StyledModalContent = styled.div`
    z-index: 1;
`;