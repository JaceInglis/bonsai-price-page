import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Paper } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [ dropActive, setDropActive ] = useState(false);

  const theme = useTheme();

  const DropDown = () => (
    <Paper elevation={12} sx={{ mt: .5, display: 'flex', flexDirection: 'column' }}>
      <Button color='inherit'>Product</Button>
      <Button color='inherit'>Templates</Button>
      <Button color='inherit'>Pricing</Button>
      <Button color='inherit'>Reviews</Button>
      <Button color='inherit'>Log in</Button>
    </Paper>
  )

  return (
    <>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <AppBar position='static' color='transparent' elevation={0} sx={{ borderBottom: '1px solid lightgrey', width: '90%'}}>
                <Toolbar>
                    <Typography variant='h6' sx={{ flexGrow: 1 }}>
                        bonsai
                    </Typography>

                    <Box sx={{display: 'flex'}}>
                        <Box sx={{ [theme.breakpoints.down('md')]: {display: 'none'} }} mr={10}>
                            <Button color='inherit'>Product</Button>
                            <Button color='inherit'>Templates</Button>
                            <Button color='inherit'>Pricing</Button>
                            <Button color='inherit'>Reviews</Button>
                        </Box>
                        <Button sx={{ mr: 2, borderRadius: '20px', [theme.breakpoints.down('md')]: {display: 'none'} }} color='inherit'>Log in</Button>
                        <Button sx={{ borderRadius: '20px', backgroundColor: '#22ad01', ':hover': {backgroundColor: '#22af01'} }} variant='contained'>Start free</Button>
                    </Box>

                    <IconButton onClick={() => setDropActive(!dropActive)} sx={{ml: 2, [theme.breakpoints.up('md')]: {display: 'none'},
                    color: '#fff',
                    backgroundColor: '#003c2f', 
                    ':hover': {backgroundColor: '#003c3f'}}}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
        {dropActive && <DropDown />}
    </>
  )
}

export default Navbar