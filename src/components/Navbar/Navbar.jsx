import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";

const Navbar = () => {

  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <AppBar position='static' color='transparent' elevation={0} sx={{ borderBottom: '1px solid lightgrey', width: '90%'}}>
        <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                bonsai
            </Typography>
            <Box sx={{ display: 'flex', [theme.breakpoints.down('md')]: {display: 'none'} }}>
                <Box mr={10}>
                    <Button color='inherit'>Product</Button>
                    <Button color='inherit'>Templates</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>Reviews</Button>
                </Box>
                <Button sx={{ mr: 2, borderRadius: '20px' }} color='inherit'>Log in</Button>
                <Button sx={{ borderRadius: '20px' }} variant='contained' color='primary'>Start free</Button>
            </Box>
            <IconButton sx={{[theme.breakpoints.up('md')]: {display: 'none'}, color: 'white', backgroundColor: 'black', ':hover': {backgroundColor: 'darkgrey'}}}>
                <MenuIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar