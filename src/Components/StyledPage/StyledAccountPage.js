import styled from "styled-components";

import { breakpoint } from "src/Utilities";

export const StyledAccountPage = styled.div`
    padding: 20px 20px 0 20px;

    .infoWrapper {
        display: flex;
        width: 100%;

        ${breakpoint.breakTablet`
            flex-direction: column;
        `}
    }

    .generalInfoWrapper {
        padding-left: 20px;
        padding-top: 20px;
        display: flex;

        ${breakpoint.breakMobile`
            flex-direction: column;
            padding-left: 0px;
            align-items: center;
        `}

        .userInfo {
            padding: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            ${breakpoint.breakMobile`
                margin-top: 10px;
            `}
            
            & > p {
                padding: 5px 0;
            }

            .username {
                font-size: 20px;
            }

            .value {
                display: block;
                max-width: 270px;
                text-overflow: ellipsis;
                overflow: hidden;

                ${breakpoint.breakIpadPro`
                    max-width: 185px;
                `}

                ${breakpoint.breakTablet`
                    max-width: unset;
                `}

                ${breakpoint.breakMobile`
                    max-width: 275px;
                `}
            }
        }
    }

    .update {
        min-width: 550px;
        margin-left: 50px;

        ${breakpoint.breakIpadPro`
            margin-left: 0;
            min-width: 350px;
        `}
        
        ${breakpoint.breakTablet`
            margin-top: 30px;
        `}

        ${breakpoint.breakTablet`
            min-width: 100%;
        `}

        .updateInfo {
            margin-top: 10px;
        }

        .updateItem {
            padding: 10px;

            .labelAvatar {
                display: inline-block;
                padding-bottom: 10px;
            }
        }
    }

    .MuiFormLabel-root {
        color: #fff;
    }

    .MuiInputBase-root {
        color: #fff;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiFormLabel-root.Mui-focused {
        color: #fff;
    }
    
    .MuiFormLabel-root.Mui-error {
        color: #f44336;
    }

    .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
        border-color: #f44336;
    }

    .MuiFormLabel-root.Mui-disabled {
        color: #fff;
    }

    .MuiInputBase-root.Mui-disabled {
        color: #fff;
    }

    .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }
`;