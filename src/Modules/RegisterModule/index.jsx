import { unwrapResult } from "@reduxjs/toolkit";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { FormRegisterComponent } from "src/Components";
import { register } from "src/Redux";
import { registerSchema } from "src/Utilities";

export const RegisterModule = ({ onHiddenLogin = () => {} }) => {
    const dispatch = useDispatch();
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: ""
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
                try {
                    const { confirmPassword, ...body } = values;
                    const res = await dispatch(register(body));
                    unwrapResult(res);
                    if (res) {
                        onHiddenLogin();
                    }
                } catch (err) {
                    setSubmitting(false);
                    let errorMessage = "";
                    if (err.response.status === 409) {
                        errorMessage = "Email đã được đăng ký!";
                    } else {
                        errorMessage = "Lỗi đăng ký!";
                    }
                    toast.error(errorMessage);
                }
            }}
            validationSchema={registerSchema}
        >
            {(props) => {
                const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = props;
                return (
                    <FormRegisterComponent
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