import { unwrapResult } from "@reduxjs/toolkit";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { FormRegisterComponent } from "src/Components";
import { register } from "src/Redux";
import { PATH_HOME } from "src/Routes";
import { registerSchema } from "src/Utilities";

export const RegisterModule = ({ onToggleLogin = () => {} }) => {
    const dispatch = useDispatch();
    const history = useHistory();
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
                        onToggleLogin();
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