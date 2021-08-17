import styled from "styled-components";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { StyledButton, SearchResultBox, AvatarComponent } from "src/Components";
import { breakpoint, useWindowDimensions } from "src/Utilities";
import { authSelector } from "src/Redux";
import { PATH_ACCOUNT_SETTING } from "src/Routes";

export const HeaderComponent = ({
    isBlur = false,
    onClickLogin = () => {},
    keySearch = "",
    isSearching = false,
    onChangeKeySearch = () => {},
    searchResult,
    isShowSearchResultBox = false,
    onShowSearchResultBox = () => {},
    onHiddenSearchResultBox = () => {},
    isFocused = false,
    onClickSearchAll,
    onKeyUpInput = () => {},
    onClickLogout = () => {}
}) => {
    const { width } = useWindowDimensions();
    const userInfo = useSelector(authSelector).userInfo;

    const MenuAccount = () => {
        return (
            <Menu>
                <Link to={PATH_ACCOUNT_SETTING} className="item">
                    <span className="icon">
                        <ion-icon name="shield-checkmark-outline"></ion-icon>
                    </span>
                    <span className="text">
                        Tài khoản
                    </span>
                </Link>
                <div className="item" onClick={onClickLogout}>
                    <span className="icon">
                        <ion-icon name="log-out-outline"></ion-icon>
                    </span>
                    <span className="text">
                        Đăng xuất
                    </span>
                </div>
            </Menu>
        );
    };
    return (
        <Container 
            className="flexCenter" 
            isBlur={isBlur}
            isFocused={isFocused}
            width={width}
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
                <input 
                    type="text" 
                    value={keySearch} 
                    onChange={onChangeKeySearch} 
                    onFocus={onShowSearchResultBox} 
                    onBlur={onHiddenSearchResultBox} 
                    onKeyUp={onKeyUpInput}
                />
                {isSearching && (
                    <span className="spinner">
                        <ClipLoader size={16} color="#fff" />
                    </span>
                )}
                {isShowSearchResultBox && (
                    <div className="searchResult">
                        <SearchResultBox keySearch={keySearch} searchResult={searchResult} onClickSearchAll={onClickSearchAll} />
                    </div>
                )}
            </div>
            <div className="menu flexCenter">
                <div className="loginBtn">
                    {userInfo ? (
                        <>
                            <AvatarComponent 
                                // width={50}
                                avatarUrl={userInfo.avatarUrl}
                            />
                            <div className="menuAccount">
                                <MenuAccount />
                            </div>
                        </>
                    ) : (
                        <StyledButton onClick={onClickLogin}>
                            Đăng nhập
                        </StyledButton>
                    )}
                </div>
            </div>
        </Container>
    );
};

const Menu = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    border-radius: 8px;
    overflow: hidden;

    .item {
        display: flex;
        width: 130px;
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: ${p => p.theme.colors.main};
        }

        .icon {
            margin-right: 10px;
        }

        .text {
            display: inline-block;
            /* width: 100px; */
        }
    }
`;

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
        backdrop-filter: blur(10px);
        border-bottom: 1px solid ${theme.colors.gray_1};
        box-shadow: 0 3px 7px rgba(0, 0, 0, .3);
        height: 60px;
    ` : ""}

    /* ${breakpoint.breakMobile`
        justify-content: center;
    `} */
    
    .menu {
        .uploadBtn {
            ${breakpoint.breakMobile`
                display: none;
            `}
        }

        .loginBtn {
            margin-left: 10px;
            display: ${p => p.width < 744 && p.isFocused ? "none" : "block"};
            position: relative;
            margin-right: 20px;

            ${breakpoint.breakMobile`
                margin-right: 0px;
            `}

            &:hover {
                .menuAccount {
                    padding-top: 5px;
                    display: block;
                }
            }

            .menuAccount {
                position: absolute;
                top: 100%;
                right: 0;
                display: none;
            }

            button {
                ${breakpoint.breakMobile`
                    padding: 5px;
                `}
            }
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

        ${breakpoint.breakMobile`
            padding: 10px 20px;
            margin-left: 0;
            min-width: unset;
            flex: 1;
        `}

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