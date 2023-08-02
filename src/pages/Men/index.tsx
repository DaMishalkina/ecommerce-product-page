import productCards from "../../data/productCards.json";

import {MainWrapper} from "../../components/MainWrapper/MainWrapper";
import {ProductItem} from "../../features/ProductItem/ProductItem";
import {ProductItemsWrapper} from "../../features/ProductItemsWrapper/ProductItemsWrapper";

import {ProductCardType} from "../../data/types/types";


const productItems: ProductCardType[] = productCards.productCards;
const filteredBySex = (items: ProductCardType[], sex = "men") => {
    return items.filter(item =>
        item.sex === sex || typeof item.sex === "undefined"
    )
}
export const Men = () => {
    const items = filteredBySex(productItems, "men");
    return (
       <MainWrapper header="Men">
           <ProductItemsWrapper>
               {items.map((item, index) => (
                   <ProductItem key={index} item={item} link={`/men/${item.id.toString()}`}/>
               ))}
           </ProductItemsWrapper>
       </MainWrapper>
    )
}