import "./CartDropdown.scss";
import {CartItemType} from "../types/types";
import * as classNames from "classnames";
import {CartItem} from "../CartItem/CartItem";
import {Button} from "../../Button/Button";

interface Props {
    header: string,
    productItems?: CartItemType[],
    buttonLabel?: string,
    mainText?: string,
    currency?: string
}

const isCartFilled = (items: CartItemType[]) => {
    return items?.length > 0;
}

export const CartDropdown = ({
                                 header = "Cart",
                                 mainText = "",
                                 productItems = [],
                                 buttonLabel = "Checkout",
                                 currency = "$"}: Props) => {
    return (
        <section className="cart">
            <p className="cart__header">{header}</p>
            <div className={classNames(
                "cart-content cart__content",
                isCartFilled(productItems) && "cart-content--full")}>
                {isCartFilled(productItems) ?
                    <div className="cart-content__item">
                        { productItems?.map((product, index) =>(
                            <CartItem
                                item={product}
                                key={index}
                                currency={currency} />
                        ))}
                        <Button buttonLabel={buttonLabel} buttonClassName="cart__button" />
                    </div> : mainText?.length > 0 && (
                    <p className="cart__message">{mainText}</p>
                )
                }
            </div>
        </section>
    )

}