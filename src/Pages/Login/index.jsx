import { useState } from "react";
import { useSelector } from "react-redux";

import { StyledBackgroundLogin, StyledLoginPage, LoadingOverLay } from "src/Components";
import { FORM_LOGIN, FORM_REGISTER } from "src/Constant";
import { LoginModule, RegisterModule } from "src/Modules";
import { authSelector } from "src/Redux";

export const Login = () => {
    const [form, setForm] = useState(FORM_LOGIN);
    const isLoading = useSelector(authSelector).isLoading;
    const handleSwitchForm = () => {
        if (form === FORM_LOGIN) {
            setForm(FORM_REGISTER);
        } else {
            setForm(FORM_LOGIN);
        }
    };
    return (
        <StyledLoginPage className="flexCenter">
            <StyledBackgroundLogin />
            {form === FORM_LOGIN ? (
                <>
                    <LoginModule />
                    <p className="switch">Bạn chưa có tài khoản? <span onClick={handleSwitchForm}>Đăng ký</span></p>
                </>
            ) : (
                <>
                    <RegisterModule />
                    <p className="switch">Bạn đã có tài khoản? <span onClick={handleSwitchForm}>Đăng nhập</span></p>
                </>
            )}
            {isLoading && <LoadingOverLay />}
        </StyledLoginPage>
    );
};