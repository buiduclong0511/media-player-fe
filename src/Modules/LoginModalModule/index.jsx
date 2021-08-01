import { useState } from "react";
import { useDispatch } from "react-redux";

import { 
    StyledModal, 
    StyledModalOverLay, 
    StyledModalContent, 
    StyledFormLogin, 
    LoginComponent,
    RegisterComponent
} from "src/Components";
import { FORM_LOGIN, FORM_REGISTER } from "src/Constant";
import { hideFormLogin } from "src/Redux";

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
                                    <LoginComponent />
                                </div>
                                <p className="switchToRegister">
                                    Bạn chưa có tài khoản? <span className="link" onClick={handleSwitchForm}>Đăng ký</span>
                                </p>
                            </div>
                        ) : (
                            <div className="form">
                                <div className="formWrapper">
                                    <RegisterComponent />
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