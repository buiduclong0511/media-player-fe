import styled from "styled-components";
import { BsUpload } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";

import { StyledButton , SearchBoxResult, Avatar } from "src/Components";
import { logout } from "src/Redux";

export const HeaderComponent = ({
    keySearch = "",
    onChangeKeySearch = () => {},
    result = [],
    isSearching = false,
    onClickLoginBtn = () => {}
}) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    return (
        <Container>
            <div className="grid wide">
                <div className="headerWrapper flexCenter">
                    <div className="logo">
                        <img src="images/logos/logo.png" alt="" />
                    </div>
                    <div className="searchBox">
                        <div className="searchIcon">
                            <BiSearchAlt />
                        </div>
                        <input type="text" value={keySearch} onChange={onChangeKeySearch} />
                        {isSearching && (
                            <div className="spinner">
                                <ClipLoader color="#7200A1" size={20} />
                            </div>
                        )}
                        {keySearch && (
                            <div className="searchBoxResult">
                                <SearchBoxResult result={result} />
                            </div>
                        )}
                    </div>
                    <div className="listBtn flexCenter">
                        <div className="btnItem uploadButton flexCenter">
                            <StyledButton type="noBg">
                                <BsUpload />
                                <span className="text">Upload</span>
                            </StyledButton>
                        </div>
                        {!auth.accessToken ? (
                            <div className="btnItem loginButton flexCenter">
                                <StyledButton onClick={onClickLoginBtn}>
                                    Login
                                </StyledButton>
                            </div> 
                        ) : (
                            <div className="avatar" onClick={() => dispatch(logout())}>
                                <Avatar imagePath={auth.userInfo.avatarUrl} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    border-bottom: 1px solid ${p => p.theme.colors.gray_4};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    background-color: #fff;

    .headerWrapper {
        justify-content: space-between;
        height: 70px;
    }

    .searchBox {
        display: flex;
        position: relative;

        .searchIcon {
            position: absolute;
            top: calc(50% + 2px);
            left: 10px;
            transform: translateY(-50%);
        }

        .spinner {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
        }

        .searchBoxResult {
            position: absolute;
            top: calc(100% + 10px);
            left: 0;
            width: 100%;
        }

        input {
            display: inline-block;
            padding: 10px 30px;
            width: 250px;
            border-radius: 100px;
            border: 1px solid ${p => p.theme.colors.gray_3};
            caret-color: ${p => p.theme.colors.main};
            background-color: ${p => p.theme.colors.gray_6};

            &:focus {
                border: 1px solid ${p => p.theme.colors.main};
                
            }
        }
    }

    .logo {
        height: 100%;

        img {
            height: 100%;
        }
    }

    .listBtn {
        display: flex;

        .btnItem:first-child {
            margin-right: 10px;
        }

        .avatar {
            cursor: pointer;
        }
    }
`;