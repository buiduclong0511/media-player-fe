import styled from "styled-components";

export const StyledSearchResultItem = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${p => p.theme.colors.gray_5};
    }

    .songName {
        font-weight: 600;
        color: ${p => p.theme.colors.gray_2};
    }

    .singer {
        font-size: 14px;
        color: ${p => p.theme.colors.gray_3};
    }
`