import styled from "styled-components";
import { motion } from "framer-motion";

import { StyledFormControl, InputComponent, StyledUpdateButton } from "src/Components";


export const FormLoginComponent = ({
    values = {},
    errors = {},
    touched = {},
    onChange = () => {},
    onBlur = () => {},
    onSubmit = () => {},
    isSubmitting = false,
}) => {
    
    return (
        <Container onSubmit={onSubmit}>
            <div className="heading">
                Login
            </div>
            <div className="formMain">
                <StyledFormControl>
                    <InputComponent
                        label="Email"
                        value={values.email}
                        error={errors.email}
                        touched={touched.email}
                        name="email"
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                </StyledFormControl>
                <StyledFormControl>
                    <InputComponent
                        label="Password"
                        value={values.password}
                        error={errors.password}
                        touched={touched.password}
                        name="password"
                        onChange={onChange}
                        onBlur={onBlur}
                        type="password"
                    />
                </StyledFormControl>
            </div>
            <div className="loginBtn">
                <StyledUpdateButton type="submit" variant="contained" disabled={isSubmitting}>Login</StyledUpdateButton>
            </div>
        </Container>
    );
};

const Container = styled(motion.form)`
    display: flex;
    flex-direction: column;
    min-height: 350px;
    /* border: 1px solid ${p => p.theme.colors.gray_3}; */
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;

    .formMain {
        flex: 1;
    }

    .heading {
        text-align: center;
        font-weight: 800;
        font-size: 23px;
        margin-bottom: 10px;
    }

    .loginBtn {
        border-top: 1px solid #fff;
    }
`;