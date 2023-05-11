import React, { useState } from 'react'
import { Box } from '@mui/material';
import Price from './Price/Price';

const prices = [
    {name: 'Standard', priceMonth: 24, priceYear: 17, description: 'Ideal for freelancers and contractors just starting out.', features: ['Standard workflow']},
    {name: 'Professional', priceMonth: 39, priceYear: 32, description: 'Everything a growing independent business needs to thrive.', features: ['Professional workflow']},
    {name: 'Business', priceMonth: 79, priceYear: 52, description: 'The perfect package for small businesses and agencies.', features: ['Business workflow']}
]

const Prices = () => {

  const [slider, setSlider] = useState(false);

  return (
    <Box>
        {prices.map(price => (
            <Price key={price.name} name={price.name} price={slider? price.priceYear : price.priceMonth} description={price.description} features={price.features} slider={slider}/>
        ))}
    </Box>
  )
}

export default Prices