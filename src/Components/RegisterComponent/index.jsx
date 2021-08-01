import styled from "styled-components";

import { StyledFormControl, InputComponent, StyledButton } from "src/Components";

export const RegisterComponent = () => {
    return (
        <Container>
            <div className="heading">
                Đăng ký
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
            <StyledFormControl>
                <InputComponent
                    label="Confirm password"
                />
            </StyledFormControl>
            <StyledButton 
                fullWidth 
                mt={20}
                fz={20}
            >
                Đăng ký
            </StyledButton>
        </Container>
    );
};

const Container = styled.form`
    width: 348px;
    padding: 20px;

    .logo {
        height: 60px;
        text-align: center;

        img {
            height: 100%;
        }
    }

    .heading {
        font-weight: 600;
        font-size: 25px;
        padding: 10px 0;
        text-align: center;
    }
`;