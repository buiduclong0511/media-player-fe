import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";


export const LoadingComponent = ({
    color = "#36D7B7",
    width = 4,
    height = 35,
    margin = 20
}) => {
    return (
        <Container
            margin={margin}
            className="flexCenter"
        >
            <ScaleLoader color={color} width={width} height={height} />
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    margin: ${p => p.margin + 'px'};
`;