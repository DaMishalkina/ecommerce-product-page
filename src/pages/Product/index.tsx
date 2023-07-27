import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import productCards from "../../data/productCards.json";
import {ProductCardType} from "../../data/types/types";
import "./index.scss";
import * as classNames from "classnames";
import {Modal} from "../../components/Modal/Modal";
import {ImagesCarousel} from "./components/ImagesCarousel/ImagesCarousel";


const products: ProductCardType[] = productCards.productCards;
const IMAGES_NUMBER = 4;

export const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(products.filter(item => item.id.toString() === id)[0]);
    const [isCarouselOpened, setIsCarouselOpened] = useState(false);
    const [sliderTransformationIndex, setSliderTransformationIndex] = useState(0);
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
        <section className="product-section">
            <div className="product-images product__images">
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
                <Modal
                    isOpened={isCarouselOpened}
                    className={classNames("product-images__modal",
                        isCarouselOpened && "product-images__modal--opened"
                    )}
                    setIsOpened={(state: boolean) => setIsCarouselOpened(state)}
                >
                    <ImagesCarousel
                        defaultSliderTransformationIndex={sliderTransformationIndex}
                        desktopSliderSize="large"
                        images={productImages}
                    />
                </Modal>
            </div>
            {product?.productName}
        </section>
    )
}