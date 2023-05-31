import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material';
import Price from './Price/Price';
import { prices } from './priceObj';
import Slider from './Slider/Slider';
import { useTheme } from "@mui/material/styles";

const Prices = () => {
  const [slider, setSlider] = useState(false);

  const handleToggle = () => {
    setSlider(!slider)
  }

  const theme = useTheme();

  return (
    <Box sx={{ mt: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center', justiftyContent: 'center'}}>
        <Typography variant='h2' sx={{ textAlign: 'center', width: '50%', mb: '5%', color: '#003c2f', fontWeight: '700'}}>Pick the best plan for your business</Typography>
        <Slider handleToggle={handleToggle} slider={slider}/>
        <Grid container spacing={3} sx={{ flexGrow: 1, mt: '5%', justifyContent: 'center' }}>
            {prices.map(price => (
                <Grid item xs={10} md={3.5} sm={10} lg={2.5}>
                    {price.name === 'Professional'?
                    <Box sx={{background: '#ee8146', padding: '.5em', textAlign: 'center', borderRadius: '20px', [theme.breakpoints.up('md')]: {position: 'relative', bottom: '2.5em'}}}>
                      <Typography variant='subtitle2' sx={{color: '#fff', mb: '10px'}}>Best value for money</Typography>
                      <Price key={price.name} name={price.name} price={slider? price.priceYear : price.priceMonth} description={price.description} features={price.features} slider={slider}/>
                    </Box>
                    :
                    <Price key={price.name} name={price.name} price={slider? price.priceYear : price.priceMonth} description={price.description} features={price.features} slider={slider}/>
                    }
                </Grid>
            ))}   
        </Grid>
    </Box>
  )
}

export default Prices