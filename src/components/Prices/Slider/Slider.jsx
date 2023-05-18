import React from 'react'
import { Box, Typography } from '@mui/material';

const Slider = ({ handleToggle, slider }) => {

  return (
    <Box
    onClick={handleToggle}
    sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        borderRadius: '50px',
        padding: '7px',
        background: '#f0f5f0',
        transition: 'background 0.3s ease',
        cursor: 'pointer'
    }}
    >
        <Typography
            sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px',
            color: !slider? 'white' : '#36665a',
            transition: 'color 0.3s ease',
            borderRadius: '50px',
            fontSize: '0.9em',
            zIndex: 1
            }}
            variant='h6'
        >
            Monthly
        </Typography>
        <Box
            sx={{
            display: 'flex',
            padding: '10px 20px',
            alignItems: 'center',
            left: '25%',
            borderRadius: '50px',
            marginLeft: '-20px',
            zIndex: 1
            }}
        >
            <Typography sx={{ fontSize: '0.9em', color: slider? 'white' : '#36665a', transition: 'color 0.3s ease'}} variant='h6'>
            Yearly
            </Typography>
            <Typography
            sx={{
                borderRadius: '50px',
                background: 'white',
                ml: '15px',
                padding: '5px',
                fontSize: '0.75em',
                color: '#22ad01',
            }}
            variant='subtitle2'
            >
            2 months for free
            </Typography>
        </Box>
        <Box id='hi'
        sx={{
            width: slider? '183px' : '91px',
            height: '50px',
            position: 'absolute',
            borderRadius: '50px',
            background: '#003c2f',
            transition: 'transform 0.3s ease',
            transform: `translateX(${slider ? '85px' : '0'})`
            }}
        >
        </Box>
    </Box>
  )
}

export default Slider