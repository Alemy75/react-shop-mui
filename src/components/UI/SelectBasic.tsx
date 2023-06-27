import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function SelectBasic() {
    const [open, setOpen] = React.useState(false)
    const [age, setAge] = React.useState<number | string>('')

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        setAge(Number(event.target.value) || '')
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = (
        event: React.SyntheticEvent<unknown>,
        reason?: string
    ) => {
        if (reason !== 'backdropClick') {
            setOpen(false)
        }
    }

    return (
        <div>
            <Button onClick={handleClickOpen}>Фильтры</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Выберете филтры</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">
                                Цена
                            </InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={age}
                                onChange={handleChange}
                                input={<OutlinedInput label="Age" />}
                            >
                                <MenuItem value={10}>По возрастанию</MenuItem>
                                <MenuItem value={20}>По убыванию</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">
                                Имя
                            </InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={age}
                                onChange={handleChange}
                                input={<OutlinedInput label="Age" />}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>По возрастанию</MenuItem>
                                <MenuItem value={20}>По убыванию</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
