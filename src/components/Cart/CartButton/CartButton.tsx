import "./CartButton.scss";
import * as classNames from "classnames";
import {CartIcon} from "../../svgs/CartIcon";

interface Props {
    buttonLabel?: string,
    onClick: () => void,
    isCartEmpty?: boolean,
    cartItemsNumber?: number,
    buttonClassName?: string
}

export const CartButton = ({
                               onClick,
                               buttonLabel = "Toggle Cart",
                               buttonClassName = "",
                               isCartEmpty = true,
                               cartItemsNumber = 0}: Props) => {
    return (
        <button
            className={classNames(
                buttonClassName,
                "cart-button",
                !isCartEmpty && "cart-button--filled-cart")}
            onClick={onClick}
        >

            <CartIcon
                color="currentColor"
                className="cart-button__icon"
            />
            <span className="visually-hidden-title cart-button__visually-hidden-title">{buttonLabel}</span>
            {!isCartEmpty &&
                <span className="cart-button__counter">{cartItemsNumber}</span>
            }


        </button>
    )
}