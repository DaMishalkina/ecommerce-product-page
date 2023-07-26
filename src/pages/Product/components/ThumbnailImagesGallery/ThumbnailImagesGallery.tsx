import "./ThumbnailImagesGallery.scss";
import {ImageType} from "../../types/types";
import {ThumbnailImage} from "./ThumbnailImage/ThumbnailImage";
import * as classNames from "classnames";

interface Props {
    images: ImageType[],
    activeImageIndex: number,
    handleClick: (index: number) => void,
    isMobileHidden?: boolean

}

export const ThumbnailImagesGallery = ({
                                           images,
                                           activeImageIndex,
                                           handleClick,
                                           isMobileHidden = true}: Props) => {
    return (
        <div className={classNames( "images-gallery",
            isMobileHidden && "images-gallery--mobile-hidden"
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