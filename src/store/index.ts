import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products.slice";

export const store = configureStore({
    reducer: {
        products: productsSlice
    }
    
})

export type RootState = ReturnType<typeof store.getState>