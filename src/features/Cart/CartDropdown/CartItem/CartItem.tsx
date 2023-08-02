import {CartItemType} from "../../types/types";

import {DeleteIcon} from "../../../../components/svgs/DeleteIcon";



import "./CartItem.scss";


interface Props {
    item: CartItemType,
    handleItemDelete?: (id: number) => void,
    currency?: string,
}

export const CartItem = ({
                             item,
                             handleItemDelete,
                             currency =  "$"}: Props) => {
    const {id, productName, productActualPrice, productQuantity = 1, image = ""} = item;
    const totalPrice = Number(Number(productActualPrice) * productQuantity).toFixed(2);

    return (
        <div className="cart-item">
            <div className="cart-item__info">
                {image?.length > 0 &&
                    <img
                        className="cart-item__image"
                        src={image}
                        alt={`${productName} Image`}
                    />
                }
                <div className="cart-item__text-container">
                    <p className="cart-item__name">{productName}</p>
                    <div className="product-description cart-item__description">
                        <span className="cart-item__price">{currency + productActualPrice}</span>
                        {productQuantity > 1 &&
                            <span className="cart-item__quantity">
                            {"x " + productQuantity.toString()}
                        </span>
                        }
                        <strong className="cart-item__total-price">
                            {currency + totalPrice}
                        </strong>
                    </div>
                </div>
            </div>
            <button
                onClick={() => {
                   handleItemDelete && handleItemDelete(id)
                }}
                className="cart-item-button cart-item__delete-button">
                <DeleteIcon
                    className="cart-item-button__icon"
                />
                <span className="visually-hidden-title cart-item__hidden-title">Delete Button</span>
            </button>
        </div>
    )
}