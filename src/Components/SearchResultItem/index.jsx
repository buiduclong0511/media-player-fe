import { Column, Grid, Row } from "@mycv/mycv-grid";
import styled from "styled-components";

export const SearchResultSongItem = ({
    data = {}
}) => {
    return (
        <Container>
            <Grid>
                <Row>
                    <Column
                        sizeDesktop={9}
                        sizeTablet={9}
                        size={12}
                    >
                        <div style={{display: 'flex'}}>
                            <div className="thumb">
                                <img src={data.thumbUrl} alt={data.name} />
                            </div>
                            <div className="info">
                                <h3 className="songName">{data.name}</h3>
                                <p className="singer">Ca sĩ: {data.singer}</p>
                                <p className="author">Sáng tác: {data.author}</p>
                            </div>
                        </div>
                    </Column>
                    <Column
                        sizeDesktop={3}
                        sizeTablet={3}
                        size={0}
                    >
                        <div className="subInfo flexCenter">
                            {data.listVisitorIds.length} lượt nghe
                        </div>
                    </Column>
                </Row>
            </Grid>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    padding: 10px 0; 

    .thumb {
        width: 100px;
        margin-right: 10px;

        img {
            width: 100%;
        }
    }
`;