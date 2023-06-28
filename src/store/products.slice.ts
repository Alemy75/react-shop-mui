import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from '../models/Product.model'
import { productsApi } from '../api/products.api'

const getAll = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
    try {
        const response = await productsApi.getAll()

        if (response.status != 200) {
            throw new Error(`Server error. Status: ${response.status}`)
        }

        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

type initialState = {
    products: Array<Product> | []
    status: number | null
}

const initialState: initialState = {
    products: [],
    status: null
}

const productsSlice = createSlice({
    initialState,
    name: 'products',
    reducers: {

    },
})

export const coinsAction = productsSlice.actions

export default productsSlice.reducer
