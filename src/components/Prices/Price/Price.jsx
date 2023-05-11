import React from 'react'
import { Typography, Paper, Button, Divider, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Price = ({ name, price, description, features, slider }) => {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column'}}>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='h6'>$ {price} {slider? '/year' : '/month'}</Typography>
        <Button sx={{ textTransform: 'unset', width: '20%', borderRadius: '20px', backgroundColor: '#22ad01', ':hover': {backgroundColor: '#22af01'} }} size='large' variant='contained'>Start for free</Button>
        <Typography variant='body2'>{description}<br />{slider && 'Billed annually.'}</Typography>
        <Divider />
        <List>
            {features.map(item => (
                <ListItem key={item}>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary={item}/>
                </ListItem>
            ))}
        </List>
    </Paper>
  )
}

export default Price