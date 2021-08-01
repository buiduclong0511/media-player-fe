import { useState } from "react";

import { 
    StyledModal, 
    StyledModalOverLay, 
    StyledModalContent, 
    StyledFormLogin, 
    LoginComponent,
    RegisterComponent
} from "src/Components";
import { FORM_LOGIN, FORM_REGISTER } from "src/Constant";

export const LoginModalModule = () => {
    const [key, setKey] = useState(FORM_LOGIN);
    const handleToggleForm = () => {
        if (key === FORM_LOGIN) {
            setKey(FORM_REGISTER);
        } else {
            setKey(FORM_LOGIN);
        }
    };
    return (
        <StyledModal className="flexCenter">
            <StyledModalOverLay />
            <StyledModalContent>
                <StyledFormLogin>
                    <div className="slider">
                        <div className="logo">
                            <img src="images/logos/logo.png" alt="" />
                        </div>
                        {key === FORM_LOGIN ? (
                            <div className="form">
                                <div className="formWrapper">
                                    <LoginComponent />
                                </div>
                                <p className="switchToRegister">
                                    Bạn chưa có tài khoản? <span className="link" onClick={handleToggleForm}>Đăng ký</span>
                                </p>
                            </div>
                        ) : (
                            <div className="form">
                                <div className="formWrapper">
                                    <RegisterComponent />
                                </div>
                                <p className="switchToRegister">
                                    Bạn đã có tài khoản? <span className="link" onClick={handleToggleForm}>Đăng nhập</span>
                                </p>
                            </div>
                        )}
                    </div>
                </StyledFormLogin>
            </StyledModalContent>
        </StyledModal>
    );
};