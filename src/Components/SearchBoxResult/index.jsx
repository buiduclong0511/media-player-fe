import styled from "styled-components";

import { StyledSearchResultItem, StyledSearchAllItem } from "src/Components";

export const SearchBoxResult = ({
    result = [],
    keySearch = ""
}) => {
    return (
        <Container>
            {result.length ? result.map(item => {
                return (
                    <StyledSearchResultItem key={item._id}>
                        <p className="songName">
                            {item.name}
                        </p>
                        <p className="singer">
                            {item.singer}
                        </p>
                    </StyledSearchResultItem>
                );
            }) : (
                <StyledSearchResultItem>
                    <p className="songName">
                        Không có kết quả
                    </p>
                </StyledSearchResultItem>
            )}
            <StyledSearchAllItem>
                <p className="searchAll">
                    Hiển thị tất cả: {keySearch}
                </p>
            </StyledSearchAllItem>
        </Container>
    );
};

const Container = styled.div`
    background-color: #fff;
    box-shadow: 5px 3px 5px rgba(0, 0, 0, .3);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid ${p => p.theme.colors.gray_5};
`;