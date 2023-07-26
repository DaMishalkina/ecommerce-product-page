import {SvgType} from "./types/types";

export const ArrowIcon = ({
                              width = "14",
                              height = "11",
                              className = "",
                              title = "Next Icon",
                              color = "#1D2026"}: SvgType) => {
    return (
        <svg
            viewBox="0 0 13 18"
            role="img"
            className={className}
            width={width}
            height={height}
            fill={color}
            xmlns="http://www.w3.org/2000/svg">
            <title>{title}</title>
            <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>

        </svg>
    )
}