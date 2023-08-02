import {MouseEvent, useEffect, useState} from "react";
import * as classNames from "classnames";

import {ActionButtons} from "./ActionButtons/ActionButtons";
import {ThumbnailImagesGallery} from "../ThumbnailImagesGallery/ThumbnailImagesGallery";

import {DisplaySettingsType, ImageType} from "../../../pages/Product/types/types";

import "./ImagesCarousel.scss";

interface Props {
    images: ImageType[],
    defaultSliderTransformationIndex?: number,
    carouselClassName?: string,
    actionsDisplaySettings?: DisplaySettingsType,
    galleryDisplaySettings?: DisplaySettingsType,
    handleCarouselImageClick?: (index: number) => void,
    desktopSliderSize?: "small" | "large"
}

const PREV = "prev";
const NEXT = "next";
const isSliderLarge = (size = "large") => {
    return size === "large";
}

export const ImagesCarousel = ({
                                   images,
                                   carouselClassName,
                                   actionsDisplaySettings = {
                                       isDisplayNone: false,
                                       isDisplayNoneDesktop: false,
                                       isDisplayNoneMobile: false
                                   },
                                   galleryDisplaySettings = {
                                       isDisplayNone: false,
                                       isDisplayNoneDesktop: false,
                                       isDisplayNoneMobile: false
                                   },
                                   handleCarouselImageClick,
                                   defaultSliderTransformationIndex = 0,
                                   desktopSliderSize = "small"
                                  }: Props) => {
    const [sliderTransformationIndex, setSliderTransformationIndex] =
        useState(defaultSliderTransformationIndex);

    useEffect(() => {
        setSliderTransformationIndex(defaultSliderTransformationIndex);
    }, [defaultSliderTransformationIndex])
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
        <div className={classNames("images-carousel",  isSliderLarge(desktopSliderSize) && "large")}>
            <div className="images-carousel__wrapper-container">
                {typeof handleCarouselImageClick !== "undefined" && (
                    <button className="images-carousel__wrapper-button"
                            onClick={() => handleCarouselImageClick(sliderTransformationIndex)}/>
                )}
                <div className={
                    classNames(
                        "images-carousel__container", carouselClassName,
                        isSliderLarge(desktopSliderSize) && "large")}>
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
                {!actionsDisplaySettings?.isDisplayNone && (
                    <ActionButtons
                        displaySettings={actionsDisplaySettings}
                        handleClick={handlePrevNextButtonsCLick} />
                )}
            </div>
            {!galleryDisplaySettings?.isDisplayNone && (
                <ThumbnailImagesGallery
                    displaySettings={galleryDisplaySettings}
                    images={images}
                    activeImageIndex={sliderTransformationIndex}
                    handleClick={(index) => setSliderTransformationIndex(index)}
                />
            )}
        </div>
    )
}