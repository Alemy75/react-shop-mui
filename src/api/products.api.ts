import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3000'

export const productsApi = {
    async getAll() {
        const response = await axios.get('/products')
        return response
    }
}