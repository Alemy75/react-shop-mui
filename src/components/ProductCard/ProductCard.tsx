import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { FC } from 'react'
import { Product } from '../../models/Product.model'

const ProductCard: FC<Product> = ({ title, photo_url, price, id }) => {

    return (
        <Card elevation={0} sx={{ bgcolor: "#cccccc10" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={photo_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="inherit" component="span">
                        Цена: {price} $
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Подробнее
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
