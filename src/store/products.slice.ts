import {
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit'
import { Product } from '../models/Product.model'
import { productsApi } from '../api/products.api'

export const fetchProducts = createAsyncThunk<
    Product[],
    undefined,
    { rejectValue: string }
>('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await productsApi.getAll()
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

type initialState = {
    products: Array<Product> | []
    status: number | null
    loading: boolean
    error: string | undefined
}

const initialState: initialState = {
    products: [],
    status: null,
    loading: false,
    error: undefined,
}

const productsSlice = createSlice({
    initialState,
    name: 'products',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    },
})

export const coinsAction = productsSlice.actions

export default productsSlice.reducer
