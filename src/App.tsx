import "./App.css"
// import {Header} from "./components/Header/Header";
import {Layout} from "./components/Layout/Layout";
import {HashRouter, Route, Routes} from "react-router-dom";
import {ROUTES} from "./components/Navigation/constants/constants";

import {RouteItem} from "./components/Navigation/types/types";


// const productItems: ProductCardType[] = productCards.productCards;

// const restructureProductItemValuesForCart = (product: ProductCardType) => {
//     return {
//         ...product,
//         productActualPrice: (Number(product?.price) - (Number(product?.price)*Number(product?.discount?.replace(/%/g, ''))/100)).toFixed(2),
//         productQuantity: 3,
//         image: `src/assets/images/products/${product.productName.replace(/\s/g, '' )}/image-product-1-thumbnail.jpg`,
//     }
// }



function App() {
    return (
        <>
            <HashRouter>
                <Routes>
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
                    </Route>
                </Routes>
            </HashRouter>
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
