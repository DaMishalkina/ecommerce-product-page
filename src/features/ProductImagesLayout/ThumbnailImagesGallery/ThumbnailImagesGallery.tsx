import classNames from "classnames";

import {ThumbnailImage} from "./ThumbnailImage/ThumbnailImage";

import {DisplaySettingsType, ImageType} from "../../../pages/Product/types/types";

import "./ThumbnailImagesGallery.scss";

interface Props {
    images: ImageType[],
    activeImageIndex: number,
    handleClick: (index: number) => void,
    displaySettings?: DisplaySettingsType
}

export const ThumbnailImagesGallery = ({
                                           images,
                                           activeImageIndex,
                                           handleClick,
                                           displaySettings = {
                                               isDisplayNoneMobile: false,
                                               isDisplayNoneDesktop: false}}: Props) => {
    const {isDisplayNoneDesktop, isDisplayNoneMobile} = displaySettings;
    return (
        <div className={
            classNames( "images-gallery",
                isDisplayNoneMobile && "display-none--mobile",
                isDisplayNoneDesktop && "display-none--desktop"
            )}>
            {images.map((image, index) => (
                <ThumbnailImage
                    key={index}
                    image={image}
                    onClick={() => handleClick(index)}
                    isActive={activeImageIndex === index} />
            ))}
        </div>
    )

}