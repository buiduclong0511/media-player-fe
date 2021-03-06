import { unwrapResult } from "@reduxjs/toolkit";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { FormLoginComponent } from "src/Components";
import { login } from "src/Redux";
import { loginSchema } from "src/Utilities";

export const LoginModule = ({ onHiddenLogin = () => {} }) => {
    const dispatch = useDispatch();
    const initialValuesLogin = {
        email: "buiduclong0511@gmail.com",
        password: "123@abc"
    };
    return (
        <Formik
            initialValues={initialValuesLogin}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const res = await dispatch(login(values));
                    unwrapResult(res);
                    if (res) {
                        onHiddenLogin();
                    }
                } catch (err) {
                    setSubmitting(false);
                    let errorMessage = "";
                    if (err.response.status === 401) {
                        errorMessage = "Sai tài khoản hoặc mật khẩu!";
                    } else {
                        errorMessage = "Lỗi đăng nhập!";
                    }
                    toast.error(errorMessage);
                }
            }}
            validationSchema={loginSchema}
        >
            {(props) => {
                const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
                return (
                    <FormLoginComponent
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
    );
};