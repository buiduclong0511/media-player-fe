import styled from "styled-components";
import { motion } from "framer-motion";

import { StyledButton } from "src/Components";

export const HeaderComponent = ({
    isBlur = false,
    onClickLogin = () => {}
}) => {
    return (
        <Container 
            className="flexCenter" 
            isBlur={isBlur}
            initial={{
                y: -1000
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: .7
            }}
        >
            <div className="searchBox flexCenter">
                <span className="searchIcon">
                    <ion-icon name="search-outline"></ion-icon>
                </span>
                <input type="text" />
            </div>
            <div className="menu flexCenter">
                <button className="uploadBtn flexCenter">
                    <span className="uploadIcon">
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                    </span>
                    <span className="text">
                        Upload
                    </span>
                </button>
                <div className="loginBtn">
                    <StyledButton onClick={onClickLogin}>
                        Đăng nhập
                    </StyledButton>
                </div>
            </div>
        </Container>
    );
};

const Container = styled(motion.div)`
    min-height: 60px;
    justify-content: space-between;
    padding: 0 10px;
    position: sticky;
    top: 0;
    right: 0;
    transition: backdrop-filter 300ms;
    ${({ isBlur, theme }) => isBlur ? `
        backdrop-filter: blur(5px);
        border-bottom: 1px solid ${theme.colors.gray_1};
    ` : ""}
    
    .menu {
        .loginBtn {
            margin-left: 10px;
        }
    }

    .uploadBtn {
        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid #fff;
        }

        .text {
            margin-left: 5px;
            margin-bottom: 2px;
        }
    }

    .searchBox {
        background-color: ${p => p.theme.colors.gray_1};
        padding: 10px 20px;
        border-radius: 100px;
        margin-left: 30px;
        min-width: 300px;

        input {
            border: none;
            padding: 0 5px;
            flex: 1;
        }

        .searchIcon {
            position: relative;
            top: 2px;
        }
    }
`;