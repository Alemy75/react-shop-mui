import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
} from '@mui/material/'
import { ShoppingCartRounded, Login } from '@mui/icons-material'
import SearchBar from '../UI/SearchBar'

export default function Header() {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                    My shop
                </Typography>
                <div style={{ marginRight: '20px' }}>
                    <SearchBar placeholder="Найти..." />
                </div>
                <IconButton color="inherit">
                    <ShoppingCartRounded />
                </IconButton>
                <IconButton color="inherit">
                    <Login />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
