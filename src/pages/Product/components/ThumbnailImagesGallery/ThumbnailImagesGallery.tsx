import "./ThumbnailImagesGallery.scss";
import {ImageType} from "../../types/types";
import {ThumbnailImage} from "./ThumbnailImage/ThumbnailImage";
import {DisplaySettingsType} from "../../types/types";
import * as classNames from "classnames";

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