import React, { useState } from 'react'
import { Box, Typography } from '@mui/material';
import Price from './Price/Price';
import { prices } from './priceObj';

const Prices = () => {

  const [slider, setSlider] = useState(false);

  return (
    <Box sx={{ mt: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h3' sx={{ textAlign: 'center', width: '50%'}}>Pick the best plan for your business</Typography>
        <Box sx={{display: 'flex'}}>
            {prices.map(price => (
                <Price key={price.name} name={price.name} price={slider? price.priceYear : price.priceMonth} description={price.description} features={price.features} slider={slider}/>
            ))}
        </Box>
    </Box>
  )
}

export default Prices