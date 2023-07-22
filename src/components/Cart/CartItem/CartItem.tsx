import "./CartItem.scss";
import {useEffect, useState} from "react";
import {DeleteIcon} from "../../svgs/DeleteIcon";
import {CartItemType} from "../types/types";

interface Props {
   item: CartItemType
}

export const CartItem = ({item}: Props) => {
    const {productName, productActualPrice, productQuantity = 1, image = ""} = item;
    const [totalPrice, setTotalPrice] = useState(productActualPrice * productQuantity);
    useEffect(() => {
        setTotalPrice(productActualPrice * productQuantity);
    }, [productActualPrice, productQuantity])
    return (
        <div className="product-item">
            {image?.length > 0 &&
                <img className="product-item__image" src={image} alt={`${productName} Image`}/>
            }
            <div className="product-item__text-container">
                <p className="product-item__name">{productName}</p>
                <div className="product-description product-item__description">
                    <span className="product-item__price">{productActualPrice}</span>
                    {productQuantity > 1 &&
                        <span className="product-item__quantity">
                            {productQuantity}
                        </span>
                }
                    <span className="product-item__total-price">
                        {totalPrice}
                    </span>
                </div>
            </div>
            <button className="product-item-button product-item__delete-button">
                <DeleteIcon className="product-item-button__icon" />
            </button>
        </div>
    )
}