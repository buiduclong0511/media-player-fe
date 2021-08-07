import { css } from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export const theme = {
    colors: {
        main: "#170F23",
        secondary: "#3F0537",
        purple: "#7200A1",
        orange: "#FF5D24",
        gray: "#F6F6F6",
        gray_1: "#333333",
        gray_2: "#4f4f4f",
        gray_3: "#828282",
        gray_4: "#BDBDBD",
        gray_5: "#E0E0E0",
        gray_6: "#F2F2F2",
        black: "#231B2E",
        bgBtn: "#430538"
    },
    breakPoints: {
        breakSmall: "320px",
        breakMobile: "540px",
        breakMobileMedium: "575px",
        breakTablet: "770px",
        breakOnlyMobile: "768px",
        breakMedium: "980px",
        breakIpadPro: "1024px",
        breakLarge: "1200px",
        breakBig: "1366px",
    }
};

export const breakpoint = {
    breakSmall: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakSmall}) {
            ${css(...args)}
        }
    `,
    breakMobile: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakMobile}) {
            ${css(...args)}
        }
    `,
    breakMobileMedium: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakMobileMedium}) {
            ${css(...args)}
        }
    `,
    breakTablet: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakTablet}) {
            ${css(...args)}
        }
    `,
    breakMedium: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakMedium}) {
            ${css(...args)}
        }
    `,
    breakIpadPro: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakIpadPro}) {
            ${css(...args)}
        }
    `,
    breakLarge: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakLarge}) {
            ${css(...args)}
        }
    `,
    breakBig: (...args) => css`
        @media (max-width: ${theme.breakPoints.breakBig}) {
            ${css(...args)}
        }
    `,
};
