import {ReactNode, FunctionComponent} from "react"
import { Header } from "../Header/Header";
import {Outlet} from "react-router-dom";
import layoutContent from "../../data/layoutContent.json";
import cartContent from "../../data/cartContent.json";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {CartDropdown} from "../Cart/CartDropdown/CartDropdown";

interface Props {
    children?: ReactNode,
    pageClassName?: string
}


export const Layout:FunctionComponent<Props> = ({children, pageClassName = ""}) => {
    const {products, quantity} = useSelector((state: RootState) => state.cart);
    return (
        <div className={pageClassName}>
            <Header
                label={layoutContent?.shopName}
                navMenu={layoutContent?.navs}
                isLogged={true}
                cartItemsNumber={quantity}
                cartDropdown={
                <CartDropdown
                    header={cartContent.header}
                    buttonLabel={cartContent.buttonLabel}
                    mainText={cartContent.defaultContent}
                    productItems={products}
                />
            }
            />
            <main>
                {children}
            </main>
            <Outlet/>
        </div>
    )
}