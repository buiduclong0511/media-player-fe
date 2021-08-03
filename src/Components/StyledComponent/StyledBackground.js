import styled from "styled-components";

export const StyledBackground = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(32deg, rgba(2,0,36,1) 0%, rgba(121,9,73,1) 50%, rgba(0,212,255,1) 100%);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`;

export const StyledBackgroundLogin = styled.div`
    background-image: url("images/backgrounds/background_login.jpg");
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-size: cover;
    top: 0;
    left: 0;
    z-index: -1;
`;