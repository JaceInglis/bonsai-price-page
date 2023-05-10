import React from 'react'
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
      <AppBar position='static' color='transparent' elevation={0} sx={{ borderBottom: '1px solid lightgrey', width: '90%'}}>
        <Toolbar>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
                bonsai
            </Typography>
            <Box mr={10}>
                <Button color='inherit'>Product</Button>
                <Button color='inherit'>Templates</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>Reviews</Button>
            </Box>
            <Button sx={{ mr: 2, borderRadius: '20px' }} color='inherit'>Log in</Button>
            <Button sx={{ borderRadius: '20px' }} variant='contained' color='primary'>Start free</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar