import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";

import { StyledFormControl, InputComponent } from "src/Components";


export const FormRegisterComponent = ({
    values = {},
    errors = {},
    touched = {},
    onChange = () => {},
    onBlur = () => {},
    onSubmit = () => {},
    isSubmitting = false,
}) => {
    
    return (
        <Container
            initial={{
                x: -1000
            }}
            animate={{
                x: 0
            }}
            onSubmit={onSubmit}
        >
            <div className="heading">
                Register
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
                <StyledFormControl>
                    <InputComponent
                        label="Confirm password"
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        touched={touched.confirmPassword}
                        name="confirmPassword"
                        onChange={onChange}
                        onBlur={onBlur}
                        type="password"
                    />
                </StyledFormControl>
            </div>
            <div className="loginBtn">
                <Button variant="contained" fullWidth color="primary" disabled={isSubmitting} type="submit">Register</Button>
            </div>
        </Container>
    );
};

const Container = styled(motion.form)`
    display: flex;
    flex-direction: column;
    min-height: 350px;
    border: 1px solid ${p => p.theme.colors.gray_3};
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;

    .formMain {
        flex: 1;
    }

    .heading {
        text-align: center;
        color: ${p => p.theme.colors.main};
        font-weight: 800;
        font-size: 23px;
        margin-bottom: 10px;
    }
`;