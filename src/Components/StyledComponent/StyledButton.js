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