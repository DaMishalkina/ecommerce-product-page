import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import productCards from "../../data/productCards.json";
import {ProductCardType} from "../../data/types/types";
import "./Product.scss";
import {Modal} from "../../components/Modal/Modal";
import {ImagesCarousel} from "./components/ImagesCarousel/ImagesCarousel";
import {Button} from "../../components/Button/Button";
import {CartIcon} from "../../components/svgs/CartIcon";
import productPageContent from "../../data/productPageContent.json";




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
            <div className="product-images product-section__item">
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
            <div className="product-item product-section__item">
                <div className="product-section__text-block">
                    <p className="product-section__eyebrow">{product?.brandName}</p>
                    <h1 className="product-section__title"> {product?.productName}</h1>
                    <p className="product-section__description">{product?.productDescription}</p>
                </div>
                <div className="product-section__price-block">
                    <p className="product-section__actual-price">
                        {
                            (Number(product?.price) - (Number(product?.price)*Number(product?.discount?.replace(/%/g, ''))/100)).toFixed(2)
                        }
                        {product?.discount && (
                            <span className="badge"></span>
                        )}
                    </p>
                    <p className="product-section__price">{product?.price}</p>
                </div>
                <div className="product-section__actions">
                    <div className="product-section__counter">0</div>
                    <Button
                        buttonLabel={productPageContent?.buttonLabel}
                        icon={<CartIcon />}
                    />
                </div>
            </div>
        </section>
    )
}