import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItemType} from "../components/Cart/types/types";

interface CartInitialState {
    products: CartItemType[],
    quantity: number
}

const initialState: CartInitialState = {
    products: [],
    quantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addProduct:(state, action: PayloadAction<CartItemType>) => {
            if (typeof action.payload.productQuantity !== "undefined"){
                state.quantity += action.payload.productQuantity;
                const existingProduct = state.products.filter(product => product.id === action.payload.id)[0];
                if(typeof existingProduct !== "undefined"
                    && typeof existingProduct.productQuantity !== "undefined") {
                    existingProduct.productQuantity += action.payload.productQuantity;
                } else {
                    state.products.push(action.payload);
                }

            }
        },
        deleteProduct: (state, action: PayloadAction<CartItemType>) => {
            const deletedProductId = action.payload.id;
            const deletedProductNumber = state.products.find(item => item.id === deletedProductId )?.productQuantity;
            if (deletedProductNumber){
                state.quantity = state.quantity - deletedProductNumber;
            }
            state.products = state.products.filter(product => product.id !== deletedProductId)
        }
    }
});

export const {addProduct, deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;