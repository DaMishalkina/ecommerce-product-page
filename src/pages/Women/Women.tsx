import productCards from "../../data/productCards.json";
import {ProductCardType} from "../../data/types/types";
import {Link} from "react-router-dom";

const productItems: ProductCardType[] = productCards.productCards;
const filteredBySex = (items: ProductCardType[], sex = "women") => {
    return items.filter(item =>
        item.sex === sex || typeof item.sex === "undefined"
    )
}
export const Women = () => {
    const items = filteredBySex(productItems, "women");
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <Link to={`/women/${item.id.toString()}`}>{item.productName}</Link>
                </div>
            ))}
        </div>
    )
}