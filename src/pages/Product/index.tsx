import {useParams} from "react-router-dom";
import {useState, useEffect, MouseEvent} from "react";
import productCards from "../../data/productCards.json";
import {ProductCardType} from "../../data/types/types";
import "./index.scss";

const products: ProductCardType[] = productCards.productCards;
const PREV = "prev";
const NEXT = "next";

export const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(products.filter(item => item.id.toString() === id)[0]);
    const [currentTransform, setCurrentTransform] = useState(0);
    const handlePrevNextButtonsCLick = (event: MouseEvent<HTMLButtonElement>) => {
        switch ((event.target as HTMLButtonElement).id) {
            case PREV:
               setCurrentTransform((prevState) => prevState - 1 < 0 ? 3 : prevState -1);
                break;
            case NEXT:
                setCurrentTransform((prevState) => prevState + 1 > 3 ? 0 : prevState + 1)
        }
    }

    useEffect(() => {
        setProduct(products.filter(item => item.id.toString() === id)[0])
    }, [id])

    return (
        <div>
            {product?.productName}
            <div className="images-carousel product__images-carousel">
                <div
                    className="images-carousel__slider"
                    style={{transform: `translateX(${-currentTransform*100}%)`}}
                >
                    {
                        [...Array(4).keys()].map((index) => (
                            <div className="images-carousel__slide" key={index}>
                                <img
                                    alt={`${product.productName} Image`}
                                    className="images-carousel__image"
                                    src={`src/assets/images/products/${product.productName.replace(/\s/g, "")}/image-product-${index + 1}.jpg`} />
                            </div>
                        ))
                    }

                </div>
                <div className="images-carousel__actions">
                    <button
                        onClick={(event) => handlePrevNextButtonsCLick(event)}
                        id={PREV}
                        className="button--prev images-carousel__button">
                        prev
                    </button>
                    <button
                        onClick={(event) => handlePrevNextButtonsCLick(event)}
                        id={NEXT}
                        className="button--next images-carousel__button">
                        next
                    </button>
                </div>
            </div>
        </div>
    )
}