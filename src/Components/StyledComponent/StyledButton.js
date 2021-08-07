import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 13px 20px;
    border-radius: 6px;
    width: 100%;
    transition: 300ms;
    font-size: 16px;
    
    &:hover {
        background-color: ${p => p.theme.colors.secondary};
    }
`;

export const StyledUpdateButton = styled(StyledButton)`
    margin-top: 20px;
    border: 1px solid #fff;
    background-color: ${p => p.disabled ? "#ccc" : "transparent"};

    &:hover {
        background-color: ${p => p.disabled ? "#ccc" : p.theme.colors.secondary};
    }
`;