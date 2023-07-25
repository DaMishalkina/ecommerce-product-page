import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import productCards from "../../data/productCards.json";
import {ProductCardType} from "../../data/types/types";

const products: ProductCardType[] = productCards.productCards;

export const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(products.filter(item => item.id.toString() === id)[0])
    useEffect(() => {
        setProduct(products.filter(item => item.id.toString() === id)[0])
    }, [id])

    return (
        <div>{product?.productName}</div>
    )
}