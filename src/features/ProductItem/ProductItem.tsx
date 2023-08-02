import {Link} from "react-router-dom";
import {ReactNode} from "react";
import * as classNames from "classnames";

import {Badge} from "../../components/Badge/Badge";
import {getProductActualPrice} from "../../utils/getProductActualPrice";

import {ProductCardType} from "../../data/types/types";

import "./ProductItem.scss";


interface Props {
    item: ProductCardType,
    link?: string,
    currency?: string
}

interface ProductWrapperComponentProps {
    link?: string,
    children?: ReactNode,
    className?: string
}

const ProductWrapperComponent = ({
                                     children,
                                     link = "",
                                     className = ""}: ProductWrapperComponentProps) => {
    return (
        <>
            {link.length > 0 ?
                <Link
                    className={classNames(className)}
                    to={link}
                >
                    {children}
                </Link>
                :
                <div
                    className={classNames(className)}
                >
                    {children}
                </div>
            }
        </>
    )
}

export const ProductItem = ({item, link, currency = "$"}: Props) => {
    const {productName, productDescription, price, discount} = item;
    const productActualPrice = getProductActualPrice(price, discount);
    return (
        <ProductWrapperComponent className="product-item" link={link}>
            <img
                alt={productName}
                className="product-item__image"
                src={`src/assets/images/products/${productName.replace(/\s/g, '' )}/image-product-1.jpg`}
            />
            <div className="product-item__info">
                <p className="product-item__name">{productName}</p>
                <p className="product-item__description">
                    {productDescription}
                </p>
                <div className="product-item__price-block">
                    <div className="product-item__actual-price">
                        {currency + productActualPrice}
                        {discount &&
                            <Badge>{discount}</Badge>
                        }
                    </div>
                    {discount &&
                        <p className="product-item__price">{currency + price}</p>
                    }
                </div>
            </div>
        </ProductWrapperComponent>
    )
}