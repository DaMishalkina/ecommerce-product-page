import {FunctionComponent} from "react";
import {RootState} from "../../redux/store";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

import {CartDropdown} from "../../features/Cart/CartDropdown/CartDropdown";
import {deleteProduct} from "../../redux/cartRedux";
import {Header} from "../Header/Header";
import {Outlet} from "react-router-dom";

import layoutContent from "../../data/layoutContent.json";
import cartContent from "../../data/cartContent.json";



interface Props {
    pageClassName?: string
}


export const Layout:FunctionComponent<Props> = ({pageClassName = ""}) => {
    const {products, quantity} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const handleDelete = (id: number) => {
        const deletedProduct = products.find(product => product.id === id);
        deletedProduct &&
        dispatch(
            deleteProduct(deletedProduct)
        )
    }
    return (
        <div className={pageClassName}>
            <Header
                label={layoutContent?.shopName}
                navMenu={layoutContent?.navs}
                isLogged={true}
                cartItemsNumber={quantity}
                cartDropdown={
                <CartDropdown
                    handleProductDelete={(id) => handleDelete(id)}
                    header={cartContent.header}
                    buttonLabel={cartContent.buttonLabel}
                    mainText={cartContent.defaultContent}
                    productItems={products}
                />
            }
            />
            <Outlet/>
        </div>
    )
}