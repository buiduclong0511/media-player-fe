import styled from "styled-components";

export const SearchResultBox = ({
    searchResult = {
        songs: [],
        playlists: []
    },
    keySearch = "",
    onClickSearchAll = () => {}
}) => {
    return (
        <Container>
            {!!searchResult.songs.length && <p className="heading">Bài hát:</p>}
            {!!searchResult.songs.length && searchResult.songs.map(item => {
                return (
                    <div key={item._id} className="searchResultItem flexCenter">
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
            <div className="showAll searchResultItem" onClick={onClickSearchAll}>
                {!!searchResult.songs.length || !!searchResult.playlists.length ? `Hiển thị tất cả với: ${keySearch}` : `Không tìm thấy bài hát nào với: ${keySearch}`}
            </div>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    width: 100%;
    border-radius: 10px;
    overflow: hidden;

    .heading {
        margin: 10px 0 5px 10px;
    }

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