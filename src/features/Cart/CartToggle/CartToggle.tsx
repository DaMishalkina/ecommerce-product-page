import * as classNames from "classnames";

import {CartIcon} from "../../../components/svgs/CartIcon";

import "./CartToggle.scss";

interface Props {
    label?: string,
    onChange: () => void,
    isCartEmpty?: boolean,
    cartItemsNumber?: number,
    buttonClassName?: string
}

export const CartToggle = ({
                               onChange,
                               label = "Toggle Cart",
                               buttonClassName = "",
                               isCartEmpty = true,
                               cartItemsNumber = 0}: Props) => {
    return (
        <label
            aria-label={label}
            className={classNames(
                buttonClassName,
                "cart-toggle",
                !isCartEmpty && "cart-toggle--filled-cart")}
        >
            <input
                className="cart-toggle__input"
                type="checkbox"
                onChange={onChange}
            />
            <span className="cart-toggle__visual-part">
                <CartIcon
                    color="currentColor"
                    className="cart-toggle__icon"
                />
                {!isCartEmpty &&
                    <span className="cart-toggle__counter">{cartItemsNumber}</span>
                }
            </span>
        </label>
    )
}