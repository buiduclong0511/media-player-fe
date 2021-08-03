import styled from "styled-components";

export const SearchResultBox = ({
    searchResult = [],
    keySearch = ""
}) => {
    return (
        <Container>
            {!!searchResult.length && searchResult.map(item => {
                return (
                    <div className="searchResultItem flexCenter">
                        <div className="thumb">
                            <img src={item.thumbUrl} alt={item.slug} />
                        </div>
                        <div className="info">
                            <p className="name">{item.name}</p>
                            <p className="singer">{item.singer}</p>
                        </div>
                    </div>
                );
            })}
            <div className="showAll searchResultItem">
                Hiển thị tất cả với: {keySearch}
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    width: 100%;
    border-radius: 10px;
    overflow: hidden;

    .searchResultItem {
        padding: 10px 20px;
        cursor: pointer;

        &:hover {
            background-color: ${p => p.theme.colors.main};
        }

        &.showAll {
            border-top: 1px solid ${p => p.theme.colors.black};
        }

        .info {
            flex: 1;

            .singer {
                font-size: 13px;
            }
        }
    }

    .thumb {
        margin-right: 5px;

        img {
            width: 40px;
            border-radius: 50%;
        }
    }
`;