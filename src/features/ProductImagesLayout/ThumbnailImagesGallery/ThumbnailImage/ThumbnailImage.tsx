import * as classNames from "classnames";

import {ImageType} from "../../../../pages/Product/types/types";

import "./ThumbnailImage.scss";

interface Props {
    image: ImageType,
    isActive?: boolean,
    onClick: () => void

}

export const ThumbnailImage = ({image, isActive = false, onClick}: Props) => {
    return (
        <button
            onClick={onClick}
            className={classNames("gallery-button",
               isActive && "gallery-button--active"
            )}
        >
            <img
                alt={`${image.title} Thumbnail Image`}
                className="gallery-button__image"
                src={typeof image.thumbnailSource === "undefined"
                    ? image.thumbnailSource
                    : image.source}
            />
        </button>
    )
}