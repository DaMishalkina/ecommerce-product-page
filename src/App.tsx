import "./App.css"
// import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { ROUTES } from "./components/Navigation/constants/constants";
import {RouteItem} from "./components/Navigation/types/types";

// import cartContent from "./data/cartContent.json";
// import productCards from "./data/productCards.json";
// import {ProductCardType} from "./data/types/types";
// import {CartItemType} from "./components/Cart/types/types";
// import {useState} from "react";

// const productItems: ProductCardType[] = productCards.productCards;

// const restructureProductItemValuesForCart = (product: ProductCardType) => {
//     return {
//         ...product,
//         productActualPrice: (Number(product?.price) - (Number(product?.price)*Number(product?.discount?.replace(/%/g, ''))/100)).toFixed(2),
//         productQuantity: 3,
//         image: `src/assets/images/products/${product.productName.replace(/\s/g, '' )}/image-product-1-thumbnail.jpg`,
//     }
// }
// const DefaultComponent: FunctionComponent = (): ReactElement => (
//     <div>{`No Component Defined.`}</div>
// );

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            {ROUTES.map((route: RouteItem) => (
                route.subRoutes ? route.subRoutes.map((item: RouteItem) => (
                        <Route
                            key={`${item.key}`}
                            path={`${item.path}`}
                            Component={item.component}
                        />
                    )) :
                    <Route
                        key={`${route.key}`}
                        path={`${route.path}`}
                        Component={route.component}
                    />
            ))}
            {/*<Route index element={<Home />} />*/}
            {/*<Route path="/contact" element={<Contact/>} />*/}
            {/*<Route path="/collections" element={<Collections/>} />*/}
            {/*<Route path="/about" element={<About/>} />*/}
            {/*<Route path="/women" element={<Women/>} />*/}
            {/*<Route path="/men" element={<Men/>} />*/}
            {/*<Route path="/:id" element={<Product/>} />*/}
        </Route>
    )
)


function App() {
    // const [product1, setProduct1] = useState<CartItemType | null>(restructureProductItemValuesForCart(productItems[0]))
    return (
        <>
            <RouterProvider router={router}/>
            {/*<Header*/}
            {/*    label={layoutContent?.shopName}*/}
            {/*    navMenu={layoutContent?.navs}*/}
            {/*    isLogged={true}*/}
            {/*    cartItemsNumber={product1?.productQuantity}*/}
            {/*    cartDropdown={*/}
            {/*    <CartDropdown*/}
            {/*        header={cartContent?.header}*/}
            {/*        buttonLabel={cartContent?.buttonLabel}*/}
            {/*        mainText={cartContent?.defaultContent}*/}
            {/*        {...(product1 && { productItems: [product1]} )}*/}
            {/*        handleDelete={() => setProduct1(null)}  />*/}
            {/*    }*/}
            {/*/>*/}
        </>
    )
}

export default App
