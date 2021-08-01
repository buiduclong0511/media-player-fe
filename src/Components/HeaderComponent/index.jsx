import styled from "styled-components";
import { BsUpload } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

import { StyledButton } from "src/Components";

export const HeaderComponent = ({
    keySearch = "",
    onChangeKeySearch = () => {}
}) => {

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
                    </div>
                    <div className="listBtn flexCenter">
                        <div className="btnItem uploadButton flexCenter">
                            <StyledButton type="noBg">
                                <BsUpload />
                                <span className="text">Upload</span>
                            </StyledButton>
                        </div>
                        <div className="btnItem loginButton flexCenter">
                            <StyledButton>
                                Login
                            </StyledButton>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    border-bottom: 1px solid ${p => p.theme.colors.gray_4};

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

        input {
            display: inline-block;
            padding: 10px 30px;
            width: 250px;
            border-radius: 100px;
            border: 2px solid ${p => p.theme.colors.gray_3};
            caret-color: ${p => p.theme.colors.main};
            background-color: ${p => p.theme.colors.gray_6};

            &:focus {
                border: 2px solid ${p => p.theme.colors.main};
                
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
    }
`;