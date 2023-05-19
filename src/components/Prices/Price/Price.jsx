import React from 'react'
import { Typography, Paper, Button, Divider, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const Price = ({ name, price, description, features, slider }) => {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Typography variant='h4' sx={{mt: '100px', mb: '15px', color: '#003c2f', fontWeight: '700'}}>{name}</Typography>
        <Typography variant='h6' sx={{color: '#003c2f', fontWeight: '700'}}>$ <span style={{fontSize: '2.5rem'}}>{price}</span> <span style={{color: '#b2c0b6', fontSize: '1rem'}}>/month</span></Typography>
        <Button sx={{ textTransform: 'unset', borderRadius: '50px', backgroundColor: '#22ad01', ':hover': {backgroundColor: '#22af01'}, m: '1.5rem 0rem', width: '12rem' }} size='large' variant='contained'>Start for free</Button>
        <Typography sx={{width: '12rem', mb: '1rem', color: '#758e7c'}} variant='body2'>{description}<br />{slider && 'Billed annually.'}</Typography>
        <List>
        <Divider sx={{mb: '1rem'}} variant='middle'/>
            {features.map(item => (
                <ListItem key={item}>
                    <ListItemIcon>
                        <CheckIcon sx={{color: '#22ad01'}}/>
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{fontSize: '1rem', color: '#213c36', fontWeight: 'bold'}} primary={item}/>
                </ListItem>
            ))}
        </List>
        <Button sx={{ textTransform: 'unset', borderRadius: '50px', backgroundColor: '#22ad01', ':hover': {backgroundColor: '#22af01'}, width: '12rem', m: '2rem 0rem' }} size='large' variant='contained'>Start for free</Button>
    </Paper>
  )
}

export default Price