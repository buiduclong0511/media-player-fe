import styled from "styled-components";

import { StyledFormControl, InputComponent, StyledButton } from "src/Components";

export const LoginComponent = () => {
    return (
        <Container>
            <div className="heading">
                Đăng nhập
            </div>
            <StyledFormControl>
                <InputComponent
                    label="Email"
                />
            </StyledFormControl>
            <StyledFormControl>
                <InputComponent
                    label="Password"
                />
            </StyledFormControl>
            <StyledButton 
                fullWidth 
                mt={20}
                fz={20}
            >Đăng nhập</StyledButton>
        </Container>
    );
};

const Container = styled.form`
    width: 348px;
    padding: 20px;

    .heading {
        font-weight: 600;
        font-size: 25px;
        padding: 10px 0;
        text-align: center;
    }
`;