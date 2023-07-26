import "./ThumbnailImagesGallery.scss";
import {ImageType} from "../../types/types";
import {ThumbnailImage} from "./ThumbnailImage/ThumbnailImage";

interface Props {
    images: ImageType[],
    activeImageIndex: number,
    handleClick: (index: number) => void

}

export const ThumbnailImagesGallery = ({images, activeImageIndex, handleClick}: Props) => {
    return (
        <div className="images-gallery">
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