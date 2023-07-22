import {ProductCardType} from "../../../data/types/types";
export interface CartItemType extends ProductCardType {
    productActualPrice: string,
    productQuantity?: number,
    image?: string
}