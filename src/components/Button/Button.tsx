import {ReactElement} from "react";
import classNames from "classnames";

import "./Button.scss";

interface Props {
    buttonLabel: string,
    onClick?: () => void,
    disabled?: boolean,
    type?: "submit" | "reset" | "button",
    buttonClassName?: string,
    icon?: ReactElement
}

export const Button = ({
                           buttonLabel,
                           onClick,
                           type="button",
                           disabled = false,
                           buttonClassName = "",
                           icon}: Props) => {

    return (
        <button
            className={classNames(
                "button",
                buttonClassName)}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            <span className="button__container">
                {icon}
                {buttonLabel}
            </span>
        </button>
    )

}