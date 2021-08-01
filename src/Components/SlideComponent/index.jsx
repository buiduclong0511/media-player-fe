import styled from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const SlideComponent = ({
    playlists = [],
    title = ""
}) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <Container>
            <h2 className="heading">{title}</h2>
            <Carousel 
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {playlists.map(playlist => {
                    return (
                        <div key={playlist.id} className="bannerItem">
                            <img src={playlist.imagePath} alt="" />
                        </div>
                    );
                })}
            </Carousel>
        </Container>
    );
};

const Container = styled.div`
    .heading {
        padding-top: 20px;
    }

    .bannerItem {
        margin: 10px;

        img {
            width: 100%;
            border-radius: 10px;
        }
    }

    .react-multiple-carousel__arrow {
        z-index: 0;
    }
`;