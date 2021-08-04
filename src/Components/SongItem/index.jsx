import styled from "styled-components";

export const SongItem = ({
    data = null,
    onClickPlayBtn = () => {},
    onClickAddBtn = () => {}
}) => {
    return (
        <Container>
            <div className="thumb" title={data.name}>
                <img src={data.thumbUrl} alt={data.name} />
                <div className="groupBtn flexCenter">
                    <button className="playBtn" onClick={onClickPlayBtn}>
                        <ion-icon name="play-circle-outline"></ion-icon>
                    </button>
                    <button className="addBtn" onClick={onClickAddBtn}>
                        <ion-icon name="add-circle"></ion-icon>
                    </button>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    padding: 10px;

    .thumb {
        cursor: pointer;
        position: relative;

        .groupBtn {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            background-color: rgba(0, 0, 0, .5);
            transition: 300ms;

            &:hover {
                opacity: 1;
            }
            
            ion-icon {
                font-size: 40px;

                @media (max-width: 1111px) {
                    font-size: 50px;
                }
            }
        }

        img {
            width: 100%;
        }
    }
`;