import styled from "styled-components";

export const StyledFormLogin = styled.div`
    background-color: #fff;
    max-width: 348px;
    min-height: 476px;
    border-radius: 10px;
    overflow: hidden;

    .slider {
        min-height: 476px;
        display: flex;
        flex-direction: column;
        max-width: 348px;
        padding-top: 20px;

        .logo {
            height: 60px;
            text-align: center;

            img {
                height: 100%;
            }
        }
    }

    .switchToRegister {
        text-align: center;
        font-size: 14px;
        padding-bottom: 15px;

        .link {
            cursor: pointer;
            text-decoration: underline;

            &:hover {
                color: #f00;
            }
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        flex: 1;

        .formWrapper {
            flex: 1;
        }
    }
`;