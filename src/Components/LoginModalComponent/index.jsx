import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LoadingOverLay } from "src/Components";
import { FORM_LOGIN, FORM_REGISTER } from "src/Constant";
import { LoginModule, RegisterModule } from "src/Modules";
import { authSelector, closePlayer } from "src/Redux";
import styled from "styled-components";

export const LoginModalComponent = ({ onHiddenLogin = () => {} }) => {
    const [form, setForm] = useState(FORM_LOGIN);
    const dispatch = useDispatch();
    const isLoading = useSelector(authSelector).isLoading;
    const handleSwitchForm = () => {
        if (form === FORM_LOGIN) {
            setForm(FORM_REGISTER);
        } else {
            setForm(FORM_LOGIN);
        }
    };

    useEffect(() => {
        dispatch(closePlayer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container className="flexCenter">
            <div className="overlay" onClick={onHiddenLogin}></div>
            {form === FORM_LOGIN ? (
                <motion.div className="formWrapper" initial={{
                    x: 1000
                }}
                animate={{
                    x: 0
                }}>
                    <LoginModule onHiddenLogin={onHiddenLogin} />
                    <p className="switch">Bạn chưa có tài khoản? <span onClick={handleSwitchForm}>Đăng ký</span></p>
                </motion.div>
            ) : (
                <motion.div className="formWrapper"
                initial={{
                    x: 1000
                }}
                animate={{
                    x: 0
                }}>
                    <RegisterModule onHiddenLogin={onHiddenLogin} />
                    <p className="switch">Bạn đã có tài khoản? <span onClick={handleSwitchForm}>Đăng nhập</span></p>
                </motion.div>
            )}
            {isLoading && <LoadingOverLay />}
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    
    .formWrapper {
        background-color: ${p => p.theme.colors.main};
        border-radius: 8px;
        padding: 20px;
        z-index: 2;
    }

    .switch {
        padding-top: 10px;
        text-align: center;

        span {
            transition: 300ms;
            cursor: pointer;

            &:hover {
                color: ${p => p.theme.colors.orange};
            }
        }
    }
`;