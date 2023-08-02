import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import productCards from "../../data/productCards.json";
import productPageContent from "../../data/productPageContent.json";

import {addProduct} from "../../redux/cartRedux";
import {Badge} from "../../components/Badge/Badge";
import {Button} from "../../components/Button/Button";
import {CartIcon} from "../../components/svgs/CartIcon";
import {Counter} from "../../components/Counter/Counter";
import {ImagesCarousel} from "../../features/ProductImagesLayout/ImagesCarousel/ImagesCarousel";
import {Modal} from "../../components/Modal/Modal";

import {ProductCardType} from "../../data/types/types";

import "./Product.scss";


const products: ProductCardType[] = productCards.productCards;
const IMAGES_NUMBER = 4;
const CURRENCY = "$";

export const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(products.filter(item => item.id.toString() === id)[0]);
    const [isCarouselOpened, setIsCarouselOpened] = useState(false);
    const [sliderTransformationIndex, setSliderTransformationIndex] = useState(0);
    const [counter, setCounter] = useState(0);
    const productImages = [...Array(IMAGES_NUMBER).keys()].map(index => {
        const folderName = product.productName.replace(/\s/g, "");
        const src = `src/assets/images/products/${folderName}/image-product-${index + 1}.jpg`;
        const thumbnailSrc = `src/assets/images/products/${folderName}/image-product-${index + 1}-thumbnail.jpg`;
        return {
            thumbnailSource: thumbnailSrc,
            source: src,
            title: product.productName
        }
    })
    const dispatch = useDispatch();

    const actualPrice = product?.discount
        ? (Number(product?.price) - (Number(product?.price)*Number(product?.discount?.replace(/%/g, ''))/100)).toFixed(2)
        : product?.price;

        useEffect(() => {
        setProduct(products.filter(item => item.id.toString() === id)[0])
    }, [id])
    const handleAddButtonClick = () => {
        dispatch(
            addProduct({
                ...product,
                productActualPrice: actualPrice,
                productQuantity: counter,
                image: `src/assets/images/products/${product.productName.replace(/\s/g, '' )}/image-product-1-thumbnail.jpg`
            })
        )
        setCounter(0);
    }

    return (
        <main className="product-page">
            <div className="product-images product-page__item">
                <ImagesCarousel
                    defaultSliderTransformationIndex={sliderTransformationIndex}
                    handleCarouselImageClick={(index) => {
                        setSliderTransformationIndex(index)
                        setIsCarouselOpened(true)
                    }}
                    images={productImages}
                    galleryDisplaySettings={{isDisplayNoneMobile: true}}
                    actionsDisplaySettings={{isDisplayNoneDesktop: true}}

                />
                {isCarouselOpened && (
                    <Modal
                        isOpened={isCarouselOpened}
                        className="product-images__modal"
                        setIsOpened={(state: boolean) => setIsCarouselOpened(state)}
                    >
                        <ImagesCarousel
                            defaultSliderTransformationIndex={sliderTransformationIndex}
                            desktopSliderSize="large"
                            images={productImages}
                        />
                    </Modal>
                )}
            </div>
            <div className="product-page__item">
                <div className="product-page__text-block">
                    <p className="product-page__eyebrow">{product?.brandName}</p>
                    <h1 className="product-page__title"> {product?.productName}</h1>
                    <p className="product-page__description">{product?.productDescription}</p>
                </div>
                <div className="product-page__price-block">
                    <p className="product-page__actual-price">
                        {
                            CURRENCY + actualPrice
                        }
                        {product?.discount && (
                           <Badge discount={product?.discount} />
                        )}
                    </p>
                    {product?.discount && (
                        <p className="product-page__price">{CURRENCY + product?.price}</p>
                    )}
                </div>
                <div className="product-page__actions">
                   <Counter counter={counter} setCounter={setCounter} />
                    <Button
                        onClick={handleAddButtonClick}
                        buttonLabel={productPageContent?.buttonLabel}
                        icon={<CartIcon />}
                    />
                </div>
            </div>
        </main>
    )
}