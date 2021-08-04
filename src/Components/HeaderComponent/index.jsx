import styled from "styled-components";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

import { StyledButton } from "src/Components";
import { SearchResultBox } from "../SearchResultBox";

export const HeaderComponent = ({
    isBlur = false,
    onClickLogin = () => {},
    keySearch = "",
    isSearching = false,
    onChangeKeySearch = () => {},
    searchResult = [],
    isShowSearchResultBox = false,
    onShowSearchResultBox = () => {},
    onHiddenSearchResultBox = () => {},
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
                <input type="text" value={keySearch} onChange={onChangeKeySearch} onFocus={onShowSearchResultBox} onBlur={onHiddenSearchResultBox} />
                {isSearching && (
                    <span className="spinner">
                        <ClipLoader size={16} color="#fff" />
                    </span>
                )}
                {isShowSearchResultBox && (
                    <div className="searchResult">
                        <SearchResultBox keySearch={keySearch} searchResult={searchResult} />
                    </div>
                )}
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
    height: 80px;
    justify-content: space-between;
    padding: 0 10px;
    position: sticky;
    top: 0;
    right: 0;
    transition: height 300ms;
    z-index: 1;
    ${({ isBlur, theme }) => isBlur ? `
        backdrop-filter: blur(5px);
        border-bottom: 1px solid ${theme.colors.gray_1};
        box-shadow: 0 3px 7px rgba(0, 0, 0, .3);
        height: 60px;
    ` : ""}
    
    .menu {
        .loginBtn {
            margin-left: 10px;
        }
    }

    .uploadBtn {
        border-bottom: 1px solid transparent;
        font-size: 16px;

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
        position: relative;

        input {
            border: none;
            padding: 0 5px;
            flex: 1;
        }

        .searchIcon {
            position: relative;
            top: 2px;
        }

        .spinner {
            position: absolute;
            top: calc(50% + 2px);
            right: 15px;
            transform: translateY(-50%);
        }

        .searchResult {
            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            width: 100%;
        }
    }
`;