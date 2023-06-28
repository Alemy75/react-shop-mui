import ProductCard from '../ProductCard/ProductCard'
import { Product } from '../../models/Product.model'
import { useState, useEffect, FC } from 'react'
import axios from 'axios'
import { Box, Grid, Skeleton } from '@mui/material'

type Props = {
    sx?: object
}

const ProductList: FC<Props> = ({ sx }) => {
    const [items, setItems] = useState<Array<Product>>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            axios.get('http://localhost:3000/products', {
                params: {
                    _page: 1,
                    _limit: 10
                }
            }).then((res) => {
                setItems(res.data)
                setIsLoading(false)
            })
        }, 300)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Grid container spacing={2} sx={sx}>
            {!isLoading &&
                items.map((item) => (
                    <Grid item xs={12} md={3}>
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            photo_url={item.photo_url}
                            price={item.price}
                        />
                    </Grid>
                ))}

            {isLoading &&
                [...Array(10)].map(() => (
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Skeleton variant='rounded' height={180} />
                            <Skeleton variant='rounded' width={150} height={15} sx={{mt: 3}}/>
                            <Skeleton variant='rounded' width={100} height={15} sx={{mt: 3}}/>
                            <Skeleton variant='rounded' width={100} height={15} sx={{mt: 3}}/>
                        </Box>
                    </Grid>
                ))}
        </Grid>
    )
}

export default ProductList
