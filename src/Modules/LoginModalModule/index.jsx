import { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { 
    StyledModal, 
    StyledModalOverLay, 
    StyledModalContent, 
    StyledFormLogin, 
    LoginComponent,
    RegisterComponent
} from "src/Components";
import { FORM_LOGIN, FORM_REGISTER } from "src/Constant";
import { Formik } from 'formik';

import { hideFormLogin, login, register, showToast } from "src/Redux";
import { loginSchema, registerSchema } from "src/Utilities";

export const LoginModalModule = () => {
    const [key, setKey] = useState(FORM_LOGIN);
    const dispatch = useDispatch();
    const handleSwitchForm = () => {
        if (key === FORM_LOGIN) {
            setKey(FORM_REGISTER);
        } else {
            setKey(FORM_LOGIN);
        }
    };
    const handleHideForm = () => {
        dispatch(hideFormLogin());
    };

    const initialValuesLogin = {
        emailLogin: "test@gmail.com",
        passwordLogin: "123@abc"
    };

    const initialValuesRegister = {
        emailRegister: "",
        passwordRegister: "",
        confirmPasswordRegister: ""
    };

    return (
        <StyledModal 
            className="flexCenter"
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
        >
            <StyledModalOverLay onClick={handleHideForm} />
            <StyledModalContent
                initial={{
                    y: -500,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    duration: .7,
                    type: "spring",
                    stiffness: 100
                }}
            >
                <StyledFormLogin>
                    <div className="slider">
                        <div className="logo">
                            <img src="images/logos/logo.png" alt="" />
                        </div>
                        {key === FORM_LOGIN ? (
                            <div className="form">
                                <div className="formWrapper">
                                    <Formik
                                        initialValues={initialValuesLogin}
                                        validationSchema={loginSchema}
                                        onSubmit={async (values) => {
                                            try {
                                                const body = {
                                                    email: values.emailLogin,
                                                    password: values.passwordLogin
                                                };
                                                const res = await dispatch(login(body));
                                                unwrapResult(res);
                                                dispatch(hideFormLogin());
                                            } catch (err) {
                                                dispatch(showToast({
                                                    message: "Sai tài khoản hoặc mật khẩu!",
                                                    type: "error"
                                                }))
                                            }
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => {
                                            return (
                                                <LoginComponent
                                                    values={values}
                                                    errors={errors}
                                                    touched={touched}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    onSubmit={handleSubmit}
                                                    isSubmitting={isSubmitting}
                                                />
                                            );
                                        }}
                                    </Formik>
                                </div>
                                <p className="switchToRegister">
                                    Bạn chưa có tài khoản? <span className="link" onClick={handleSwitchForm}>Đăng ký</span>
                                </p>
                            </div>
                        ) : (
                            <div className="form">
                                <div className="formWrapper">
                                    <Formik
                                        initialValues={initialValuesRegister}
                                        validationSchema={registerSchema}
                                        onSubmit={async (values) => {
                                            try {
                                                const body = {
                                                    email: values.emailRegister,
                                                    password: values.passwordRegister
                                                };
                                                const res = await dispatch(register(body));
                                                unwrapResult(res);
                                                if (res) {
                                                    dispatch(hideFormLogin());
                                                }
                                            } catch (err) {
                                                console.log(err.response);
                                                if (err.response.status === 409) {
                                                    dispatch(showToast({
                                                        message: "Email đã được đăng ký!",
                                                        type: "error"
                                                    }))
                                                } else {
                                                    dispatch(showToast({
                                                        message: "Có lỗi xảy ra!",
                                                        type: "error"
                                                    }))
                                                }
                                            }
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                        }) => {
                                            return (
                                                <RegisterComponent
                                                    values={values}
                                                    errors={errors}
                                                    touched={touched}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    onSubmit={handleSubmit}
                                                    isSubmitting={isSubmitting}
                                                />
                                            );
                                        }}
                                    </Formik>
                                </div>
                                <p className="switchToRegister">
                                    Bạn đã có tài khoản? <span className="link" onClick={handleSwitchForm}>Đăng nhập</span>
                                </p>
                            </div>
                        )}
                    </div>
                </StyledFormLogin>
            </StyledModalContent>
        </StyledModal>
    );
};