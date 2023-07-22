import "./CartComponent.scss";
import {CartItemType} from "../types/types";
import {CartItem} from "../CartItem/CartItem";
import {Button} from "../../Button/Button";
import * as classNames from "classnames";
import {useOutsideClick} from "../../../hooks/useOutsideClick";

interface Props {
    header: string,
    productItems?: CartItemType[],
    buttonLabel?: string,
    mainText?: string,
    currency?: string,
    handleDelete?: () => void,
    closeCartWindow?: () => void
}

const isCartFull = (items: CartItemType[] | undefined) => {
    return typeof items !== "undefined" && items?.length > 0;
}

export const CartComponent = ({
                                  header = "Cart",
                                  mainText = "",
                                  productItems,
                                  buttonLabel = "Checkout",
                                  currency = "$",
                                  handleDelete,
                                  closeCartWindow }: Props) => {
    const cartRef = useOutsideClick(() => {
        closeCartWindow && closeCartWindow()
    });

    return (
        <section ref={cartRef} className="cart">
            <p className="cart__header">{header}</p>
            <div className={classNames(
                "cart-content cart__content",
                isCartFull(productItems) && "cart-content--full")}>
                {isCartFull(productItems) ?
                    <div className="cart-content__item">
                        { productItems?.map((product, index) =>(
                            <CartItem
                                handleDelete={handleDelete}
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