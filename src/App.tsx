import "./App.css"
import {Header} from "./components/Header/Header";
import layoutContent from "./data/layoutContent.json";
import cartContent from "./data/cartContent.json";
import productCards from "./data/productCards.json";
import {ProductCardType} from "./data/types/types";
import {CartItemType} from "./components/Cart/types/types";
import {CartDropdown} from "./components/Cart/CartDropdown/CartDropdown";
import {useState} from "react";

const productItems: ProductCardType[] = productCards.productCards;

const restructureProductItemValuesForCart = (product: ProductCardType) => {
    return {
        ...product,
        productActualPrice: (Number(product?.price) - (Number(product?.price)*Number(product?.discount?.replace(/%/g, ''))/100)).toFixed(2),
        productQuantity: 3,
        image: `src/assets/images/products/${product.productName.replace(/\s/g, '' )}/image-product-1-thumbnail.jpg`,
    }
}

function App() {
    const [product1, setProduct1] = useState<CartItemType | null>(restructureProductItemValuesForCart(productItems[0]))
    return (
        <div className="App">
            <Header
                label={layoutContent?.shopName}
                navMenu={layoutContent?.navs}
                isLogged={true}
                cartItemsNumber={product1?.productQuantity}
                cartDropdown={
                <CartDropdown
                    header={cartContent?.header}
                    buttonLabel={cartContent?.buttonLabel}
                    mainText={cartContent?.defaultContent}
                    {...(product1 && { productItems: [product1]} )}
                    handleDelete={() => setProduct1(null)}  />
                }
            />
        </div>
    )
}

export default App
