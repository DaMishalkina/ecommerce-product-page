import "./CartItem.scss";
import {useEffect, useState} from "react";
import {DeleteIcon} from "../../svgs/DeleteIcon";
import {CartItemType} from "../types/types";


interface Props {
    item: CartItemType,
    currency?: string,
    handleDelete?: () => void;
}

export const CartItem = ({
                             item,
                             currency =  "$",
                             handleDelete}: Props) => {
    const {productName, productActualPrice, productQuantity = 1, image = ""} = item;
    const [totalPrice, setTotalPrice] = useState(
        Number(Number(productActualPrice) * productQuantity).toFixed(2));
    useEffect(() => {
        setTotalPrice(
            Number(Number(productActualPrice) * productQuantity).toFixed(2));
    }, [productActualPrice, productQuantity])
    return (
        <div className="product-item">
            <div className="product-item__info">
                {image?.length > 0 &&
                    <img
                        className="product-item__image"
                        src={image}
                        alt={`${productName} Image`}
                    />
                }
                <div className="product-item__text-container">
                    <p className="product-item__name">{productName}</p>
                    <div className="product-description product-item__description">
                        <span className="product-item__price">{currency + productActualPrice}</span>
                        {productQuantity > 1 &&
                            <span className="product-item__quantity">
                            {"x " + productQuantity.toString()}
                        </span>
                        }
                        <strong className="product-item__total-price">
                        {currency + totalPrice}
                    </strong>
                    </div>
                </div>
            </div>
            <button onClick={handleDelete} className="product-item-button product-item__delete-button">
                <DeleteIcon
                    className="product-item-button__icon"
                    color="currentColor" />
            </button>
        </div>
    )
}