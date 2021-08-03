import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 10px 20px;
    border-radius: 6px;
    width: 100%;
    transition: 300ms;
    
    &:hover {
        background-color: ${p => p.theme.colors.orange};
    }
`;