import "./CartComponent.scss";
import {CartItemType} from "../types/types";
import {CartItem} from "../CartItem/CartItem";

interface Props {
    header?: string,
    productItems?: CartItemType[],
    buttonLabel?: string,
    mainText?: string
}

const isCartFull = (items: CartItemType[] | undefined) => {
    return typeof items !== "undefined" && items?.length > 0;
}

export const CartComponent = ({
                                  header = "Cart",
                                  mainText = "",
                                  productItems,
                                  buttonLabel = "Checkout" }: Props) => {
    return (
        <section className="cart-container">
            <p className="cart-container__header">{header}</p>
            <div>
                {isCartFull(productItems) ?
                    productItems?.map((product, index) =>(
                        <CartItem item={product} key={index} />
                    )) : mainText?.length > 0 && (
                    <p>{mainText}</p>
                )
                }
            </div>
            {isCartFull(productItems) && (
               <span>{buttonLabel}</span>
            )}
        </section>
    )

}