import {Link} from "react-router-dom";

import productCards from "../../data/productCards.json";

import {MainWrapper} from "../../components/MainWrapper/MainWrapper";

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
           {items.map((item, index) => (
               <div key={index}>
                   <Link to={`/women/${item.id.toString()}`}>{item.productName}</Link>
               </div>
           ))}
       </MainWrapper>
    )
}