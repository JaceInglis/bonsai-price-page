import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material';
import Price from './Price/Price';
import { prices } from './priceObj';
import Slider from './Slider/Slider';

const Prices = () => {
  const [slider, setSlider] = useState(false);

  const handleToggle = () => {
    setSlider(!slider)
  }

  return (
    <Box sx={{ mt: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', justiftyContent: 'center'}}>
        <Typography variant='h2' sx={{ textAlign: 'center', width: '50%', mb: '5%', color: '#003c2f', fontWeight: '700'}}>Pick the best plan for your business</Typography>
        <Slider handleToggle={handleToggle} slider={slider}/>
        <Grid container spacing={2} sx={{ flexGrow: 1, mt: '5%', justifyContent: 'center' }}>
            {prices.map(price => (
                <Grid item xs={10} md={3.5} sm={10} lg={2.5}>
                    <Price key={price.name} name={price.name} price={slider? price.priceYear : price.priceMonth} description={price.description} features={price.features} slider={slider}/>
                </Grid>
            ))}   
        </Grid>
    </Box>
  )
}

export default Prices