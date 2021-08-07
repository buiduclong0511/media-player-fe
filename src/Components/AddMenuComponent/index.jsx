import { breakpoint } from "src/Utilities";
import styled from "styled-components";

export const AddMenuComponent = ({
    onAddToCurrent = () => {},
    onShowMenu = () => {}
}) => {
    return (
        <Container>
            <p className="item" onClick={onAddToCurrent}>Thêm vào danh sách phát</p>
            <p className="item" onClick={onShowMenu}>Thêm vào playlist</p>
        </Container>
    );
};

const Container = styled.div`
    background-color: ${p => p.theme.colors.secondary};
    width: 200px;
    z-index: 3;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 3px 5px 8px rgba(0, 0, 0, .3), 3px 5px 10px rgba(0, 0, 0, .3);

    .item {
        font-size: 13px;
        padding: 10px 20px;
        cursor: pointer;

        ${breakpoint.breakMobile`
            font-size: 15px;
            padding: 10px;
        `}

        &:hover {
            background-color: ${p => p.theme.colors.main};
        }
    }
`;