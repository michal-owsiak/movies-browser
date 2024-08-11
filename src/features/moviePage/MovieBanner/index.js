import { useState } from "react";
import { GlobalWrapper } from "../../../common/GlobalWrapper/styled";
import {
    Background,
    BannerContainer,
    Shadow,
    Banner,
    MovieInfo,
    Title,
    Stats,
    RatingIcon,
    Rating,
    RatingMax,
    Votes
} from "./styled";
import shadow from "../../../images/shadow.png";
import noBanner from "../../../images/no-backdrop.svg";
import { imageURL } from "../../../common/API/APIData";

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
};

const MovieBanner = ({ banner, title, rating, votes }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
        <Background>
            <GlobalWrapper>
                <BannerContainer>
                    <Shadow
                        src={shadow}
                        alt="Shadow Frame"
                    />
                    <Banner
                        src={banner ? (imageURL + "w1280" + banner) : noBanner}
                        alt="Banner"
                        onLoad={handleImageLoad}
                    />
                    {isImageLoaded && (
                        <MovieInfo>
                            <Title>{title ? title : "Unknown title"}</Title>
                            <Stats>
                                {votes ? (
                                    <>
                                        <RatingIcon />
                                        <Rating>{rating ? rating.toFixed(1).replace(".", ",") : "0"}</Rating>
                                        <RatingMax>/ 10</RatingMax>
                                        <Votes>{formatNumber(votes) + " votes"}</Votes>
                                    </>
                                ) : (
                                    "No votes yet"
                                )}
                            </Stats>
                        </MovieInfo>
                    )}
                </BannerContainer>
            </GlobalWrapper>
        </Background>
    );
};

export default MovieBanner;
