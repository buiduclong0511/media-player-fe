import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 20px;
    border: ${p => p.type === "noBg" ? "none" : `2px solid ${p.theme.colors.main}`};
    background-color: #fff;
    border-radius: 8px;
    background-color: ${p => p.type !== "noBg" ? `${p.theme.colors.main}` : "none"};
    color: ${p => p.type !== "noBg" ? "#fff" : "#000"};
    width: ${p => p.fullWidth ? "100%" : "unset"};
    margin-top: ${p => p.mt ? `${p.mt}px` : "0"};
    font-size: ${p => p.fz ? p.fz + 'px' : 'unset'};

    .text {
        margin-left: 5px;
    }
`;