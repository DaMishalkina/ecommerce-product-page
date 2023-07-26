import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import productCards from "../../data/productCards.json";
import {ProductCardType} from "../../data/types/types";
import "./index.scss";
// import * as classNames from "classnames";
import {Modal} from "../../components/Modal/Modal";
import {ImagesCarousel} from "./components/ImagesCarousel/ImagesCarousel";


const products: ProductCardType[] = productCards.productCards;
const IMAGES_NUMBER = 4;

export const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(products.filter(item => item.id.toString() === id)[0]);
    const [isCarouselOpened, setIsCarouselOpened] = useState(true);
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

    useEffect(() => {
        setProduct(products.filter(item => item.id.toString() === id)[0])
    }, [id])

    return (
        <div>
            {product?.productName}
            <div className="product-images product__images">
                {isCarouselOpened &&
                    <Modal handleClose={() => setIsCarouselOpened(false)}>
                        <ImagesCarousel images={productImages} />
                    </Modal>
                }

                {/*<div className={classNames(*/}
                {/*    "images-item--mobile product-images__item",*/}
                {/*    isCarouselOpened && "images-item--modal"*/}
                {/*)}>*/}
                {/*    <button*/}
                {/*        onClick={() => setIsCarouselOpened(false)}*/}
                {/*        className="images-item--modal__button"*/}
                {/*    >*/}
                {/*        <CancelIcon color="currentColor" />*/}
                {/*    </button>*/}
                {/*    <div className="images-carousel images-item__carousel">*/}
                {/*        <div*/}
                {/*            className="images-carousel__slider"*/}
                {/*            style={{transform: `translateX(${-currentTransform*100}%)`}}*/}
                {/*        >*/}
                {/*            {*/}
                {/*                [...Array(IMAGES_NUMBER).keys()].map((index) => (*/}
                {/*                    <div className="images-carousel__slide" key={index}>*/}
                {/*                        <img*/}
                {/*                            alt={`${product.productName} Image`}*/}
                {/*                            className="images-carousel__image"*/}
                {/*                            src={*/}
                {/*                                `src/assets/images/products/${product.productName.replace(/\s/g, "")}/image-product-${index + 1}.jpg`*/}
                {/*                            }*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                ))*/}
                {/*            }*/}

                {/*        </div>*/}
                {/*        <div className="images-carousel__actions">*/}
                {/*            <button*/}
                {/*                onClick={(event) => handlePrevNextButtonsCLick(event)}*/}
                {/*                id={PREV}*/}
                {/*                className="button--prev images-carousel__button">*/}
                {/*                <ArrowIcon color="currentColor" title="Prev Icon" />*/}
                {/*            </button>*/}
                {/*            <button*/}
                {/*                onClick={(event) => handlePrevNextButtonsCLick(event)}*/}
                {/*                id={NEXT}*/}
                {/*                className="button--next images-carousel__button">*/}
                {/*                <ArrowIcon color="currentColor" title="Next Icon" />*/}
                {/*            </button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="images-gallery images-item__gallery">*/}
                {/*        {*/}
                {/*            [...Array(IMAGES_NUMBER).keys()].map((index) => (*/}
                {/*                <button*/}
                {/*                    onClick={() => setCurrentTransform(index)}*/}
                {/*                    className={classNames("gallery-button images-gallery__button",*/}
                {/*                        currentTransform === index && "gallery-button--active"*/}
                {/*                    )}*/}
                {/*                    key={index}*/}
                {/*                >*/}
                {/*                    <img*/}
                {/*                        alt={`${product.productName} Thumbnail Image`}*/}
                {/*                        className="images-gallery__image"*/}
                {/*                        src={*/}
                {/*                            `src/assets/images/products/${product.productName.replace(/\s/g, "")}/image-product-${index + 1}-thumbnail.jpg`*/}
                {/*                        }*/}
                {/*                    />*/}
                {/*                </button>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    )
}