import React from 'react'
import { Typography, Paper, Button, Divider, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Price = ({ name, price, description, features, slider }) => {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='h6'>$ <strong>{price}</strong> /month</Typography>
        <Button sx={{ textTransform: 'unset', borderRadius: '20px', backgroundColor: '#22ad01', ':hover': {backgroundColor: '#22af01'} }} size='large' variant='contained'>Start for free</Button>
        <Typography variant='body2'>{description}<br />{slider && 'Billed annually.'}</Typography>
        <List>
        <Divider variant='middle'/>
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