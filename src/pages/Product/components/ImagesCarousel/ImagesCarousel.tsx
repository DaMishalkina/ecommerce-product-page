import "./ImagesCarousel.scss";
import {ArrowIcon} from "../../../../components/svgs/ArrowIcon";
import {MouseEvent, useState} from "react";
import {ImageType} from "../../types/types";
import {ThumbnailImagesGallery} from "../ThumbnailImagesGallery/ThumbnailImagesGallery";
import * as classNames from "classnames";

interface Props {
    images: ImageType[],
    carouselClassName?: string,
    isWithActions?: boolean,
    isWithActionsDesktop?: boolean,
    handleCarouselImageClick?: () => void,
    isWithGallery?: boolean,
    isWithGalleryMobile?: boolean,
}

const PREV = "prev";
const NEXT = "next";

export const ImagesCarousel = ({
                                   images,
                                   carouselClassName,
                                   isWithActions = true,
                                   isWithActionsDesktop = false,
                                   handleCarouselImageClick,
                                   isWithGalleryMobile = false,
                                   isWithGallery = true
                                  }: Props) => {
    const [sliderTransformationIndex, setSliderTransformationIndex] = useState(0);
    const handlePrevNextButtonsCLick = (event: MouseEvent<HTMLButtonElement>) => {
        switch ((event.currentTarget as HTMLButtonElement).id) {
            case PREV:
                setSliderTransformationIndex((prevState) => prevState - 1 < 0
                    ? images.length - 1
                    : prevState -1);
                break;
            case NEXT:
                setSliderTransformationIndex((prevState) => prevState + 1 > images.length -1
                    ? 0
                    : prevState + 1)
        }
    }
    return (
        <div className="images-carousel">
            <div className="images-carousel__wrapper-container">
                {typeof handleCarouselImageClick !== "undefined" && (
                    <button className="images-carousel__wrapper-button" onClick={handleCarouselImageClick}/>
                )}
                <div className={classNames("images-carousel__container", carouselClassName)}>
                    <ul
                        className="images-carousel__slider"
                        style={{transform: `translateX(${-sliderTransformationIndex*100}%)`}}
                    >
                        {
                            images.map((image, index) => (
                                <li className="images-carousel__slide" key={index}>
                                    <img
                                        alt={`${image.title} Image`}
                                        className="images-carousel__image"
                                        src={image.source}
                                    />
                                </li>
                            ))
                        }

                    </ul>
                </div>
                {isWithActions && (
                    <div className={classNames("images-carousel-actions images-carousel__actions",
                        !isWithActionsDesktop && "images-carousel-actions--desktop-hidden"
                    )}>
                        <button
                            onClick={(event) => handlePrevNextButtonsCLick(event)}
                            id={PREV}
                            className="button--prev images-carousel__button">
                            <ArrowIcon color="currentColor" title="Prev Icon" />
                        </button>
                        <button
                            onClick={(event) => handlePrevNextButtonsCLick(event)}
                            id={NEXT}
                            className="button--next images-carousel__button">
                            <ArrowIcon color="currentColor" title="Next Icon" />
                        </button>
                    </div>
                )}
            </div>
            {isWithGallery && (
                <ThumbnailImagesGallery
                    isMobileHidden={!isWithGalleryMobile}
                    images={images}
                    activeImageIndex={sliderTransformationIndex}
                    handleClick={(index) => setSliderTransformationIndex(index)}
                />
            )}
        </div>
    )
}