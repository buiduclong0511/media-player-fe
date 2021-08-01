import styled from "styled-components";

import { StyledFormControl, InputComponent, StyledButton } from "src/Components";

export const LoginComponent = ({
    values = {},
    errors = {},
    touched = {},
    onChange = () => {},
    onBlur = () => {},
    onSubmit = () => {},
    isSubmitting = false
}) => {
    return (
        <Container onSubmit={onSubmit}>
            <div className="heading">
                Đăng nhập
            </div>
            <StyledFormControl>
                <InputComponent
                    label={"Email"}
                    value={values.emailLogin}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.emailLogin}
                    touched={touched.emailLogin}
                    name={"emailLogin"}
                />
            </StyledFormControl>
            <StyledFormControl>
                <InputComponent
                    label={"Password"}
                    value={values.passwordLogin}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.passwordLogin}
                    touched={touched.passwordLogin}
                    name={"passwordLogin"}
                    type="password"
                />
            </StyledFormControl>
            <StyledButton 
                fullWidth 
                mt={20}
                fz={20}
                type="submit"
            >
                Đăng nhập
            </StyledButton>
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