import { Container, Typography } from '@mui/material'
import Header from './components/Header/Header'

import ProductList from './components/ProductList/ProductList'
import SelectBasic from './components/UI/SelectBasic'

function App() {
    return (
        <>
            <Header />
            <Container sx={{ mt: 10 }}>
                <div className="flex">
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>
                        Все товары
                    </Typography>
                    <SelectBasic />
                </div>
                <ProductList sx={{ mt: 1 }} />
            </Container>
        </>
    )
}

export default App
