import styled from "styled-components";

import { StyledFormControl, InputComponent, StyledButton } from "src/Components";

export const RegisterComponent = ({
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
                Đăng ký
            </div>
            <StyledFormControl>
                <InputComponent
                    label={"Email"}
                    value={values.emailRegister}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.emailRegister}
                    touched={touched.emailRegister}
                    name={"emailRegister"}
                />
            </StyledFormControl>
            <StyledFormControl>
                <InputComponent
                    label={"Password"}
                    value={values.passwordRegister}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.passwordRegister}
                    touched={touched.passwordRegister}
                    name={"passwordRegister"}
                    type="password"
                />
            </StyledFormControl>
            <StyledFormControl>
                <InputComponent
                    label={"Confirm password"}
                    value={values.confirmPasswordRegister}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.confirmPasswordRegister}
                    touched={touched.confirmPasswordRegister}
                    name={"confirmPasswordRegister"}
                    type="password"
                />
            </StyledFormControl>
            <StyledButton 
                fullWidth 
                mt={20}
                fz={20}
                type={"submit"}
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