export const getProductActualPrice = (price: string, discount = "") => {
    return discount.length > 0
        ? (Number(price) - (Number(price)*Number(discount?.replace(/%/g, ''))/100)).toFixed(2)
        : price;
}