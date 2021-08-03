import styled from "styled-components";

export const StyledLoginPage = styled.div`
    min-height: 100vh;
    flex-direction: column;

    .switch {
        color: ${p => p.theme.colors.main};
        padding-top: 10px;

        span {
            color: ${p => p.theme.colors.main};
            transition: 300ms;
            cursor: pointer;

            &:hover {
                color: ${p => p.theme.colors.orange};
            }
        }
    }
`;