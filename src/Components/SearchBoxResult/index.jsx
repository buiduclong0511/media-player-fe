import styled from "styled-components";

import { StyledSearchResultItem } from "src/Components";

export const SearchBoxResult = ({
    result = []
}) => {
    return (
        <Container>
            {result.map(item => {
                return (
                    <StyledSearchResultItem key={item.id}>
                        <p className="songName">
                            {item.songName}
                        </p>
                        <p className="singer">
                            {item.singer}
                        </p>
                    </StyledSearchResultItem>
                );
            })}
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