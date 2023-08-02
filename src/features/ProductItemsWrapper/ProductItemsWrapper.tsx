import {ReactNode} from "react";

import "./ProductItemsWrapper.scss";


interface Props {
    children: ReactNode
}

export const ProductItemsWrapper = ({children}: Props) => {
    return (
        <div className="product-items">
            {children}
        </div>
    )
}