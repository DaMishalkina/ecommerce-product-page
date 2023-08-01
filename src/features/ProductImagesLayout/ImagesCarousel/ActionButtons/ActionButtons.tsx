import "./ActionButtons.scss";
import {MouseEvent} from "react";
import {DisplaySettingsType} from "../../../../pages/Product/types/types";
import * as classNames from "classnames";
import {ArrowIcon} from "../../../../components/svgs/ArrowIcon";

interface Props {
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void,
    displaySettings?: DisplaySettingsType
}

const PREV = "prev";
const NEXT = "next";
const BUTTONS = [PREV, NEXT]

export const ActionButtons = ({
                                  handleClick,
                                  displaySettings = {
                                      isDisplayNoneMobile: false,
                                      isDisplayNoneDesktop: false} }: Props) => {
    const {isDisplayNoneDesktop, isDisplayNoneMobile} = displaySettings;
    return (
       <div className={
           classNames("carousel-actions",
               isDisplayNoneMobile && "display-none--mobile",
               isDisplayNoneDesktop && "display-none--desktop"
           )}>
           {BUTTONS.map((button, index) => (
               <button
                   key={index}
                   onClick={(event) => handleClick(event)}
                   id={button}
                   className={classNames("carousel-actions__button",
                       button === PREV ? "button--prev" : "button--next"
                   )}
               >
                   <ArrowIcon color="currentColor" title={`${button} Arrow Icon`} />

               </button>
           ))}
       </div>
    )

}