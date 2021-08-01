import styled from "styled-components";

export const StyledFormControl = styled.div`
    margin-bottom: 20px;

    .MuiInputLabel-root.Mui-focused {
        color: ${p => p.theme.colors.main};
    }

    .MuiInput-underline:after {
        border-bottom: 2px solid ${p => p.theme.colors.main};
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
        border-bottom: 2px solid ${p => p.theme.colors.main};
    }
`;