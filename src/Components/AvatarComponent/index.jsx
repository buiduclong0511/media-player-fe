import styled from "styled-components";

export const AvatarComponent = ({
    width = 40,
    avatarUrl = null
}) => {
    return (
        <Container width={width} avatarUrl={avatarUrl}>
            {avatarUrl ? (
                <></>
            ) : (
                <div className="emptyAvatar">
                    <ion-icon name="person-circle"></ion-icon>
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    width: ${p => p.width + "px"};
    height: ${p => p.width + "px"};
    /* background-color: #fff; */
    background-image: url(${p => p.avatarUrl ? p.avatarUrl : ""});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: ${p => p.avatarUrl ? `1px solid ${p.theme.colors.gray_1}` : "unset"};
    cursor: pointer;
    position: relative;

    .emptyAvatar {
        position: absolute;
        top: 0;
        left: 0;

        ion-icon {
            font-size: ${p => p.width + "px"};
        }
    }
`;