import ProductCard from '../ProductCard/ProductCard'
import { useEffect, FC } from 'react'
import { Box, Grid, Skeleton, Typography } from '@mui/material'
import { fetchProducts } from '../../store/products.slice'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'

type Props = {
    sx?: object
}

const ProductList: FC<Props> = ({ sx }) => {
    const { products, loading, error } = useAppSelector(
        (store) => store.products
    )

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Grid container spacing={2} sx={sx}>
            {!loading &&
                products.map((item) => (
                    <Grid item xs={12} md={3} key={item.id}>
                        <ProductCard
                            id={item.id}
                            title={item.title}
                            photo_url={item.photo_url}
                            price={item.price}
                        />
                    </Grid>
                ))}

            {loading &&
                [...Array(10)].map((_, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <Box>
                            <Skeleton variant="rounded" height={180} />
                            <Skeleton
                                variant="rounded"
                                width={150}
                                height={15}
                                sx={{ mt: 3 }}
                            />
                            <Skeleton
                                variant="rounded"
                                width={100}
                                height={15}
                                sx={{ mt: 3 }}
                            />
                            <Skeleton
                                variant="rounded"
                                width={100}
                                height={15}
                                sx={{ mt: 3 }}
                            />
                        </Box>
                    </Grid>
                ))}
            {error && <Typography variant='h5'>Ошибка: {error}</Typography>}
        </Grid>
    )
}

export default ProductList
