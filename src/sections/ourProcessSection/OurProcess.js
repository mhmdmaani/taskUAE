import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useRef } from 'react'
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPosition';
import OurProcessSammury from './LeftSection/OurProcessSammury';
import TimelineItem from './timeline/TimelineItem';


const items = [
  {
    id: 1,
    title: 'Open your account',
    description: 'Open an account in minutes online and start investing today.',
    number: '1',
  },
  {
    id: 2,
    title: 'getAccess to the investing app',
    description: 'Get your investing app on your phone or tablet.',
    number: '2',
  },
  {
    id: 3,
    title: 'Invest in stocks',
    description: 'Open an account in minutes online and start investing today.',
    number: '3',
  },
  {
    id: 4,

    title: ' Get your Consulting in time',

    description: 'We provide you with the best consulting services.',
    number: '4',
  },
  {
    id: 5,

    title: ' Get your Consulting in time',

    description: 'We provide you with the best consulting services.',
    number: '5',
  },
];
function OurProcess() {
   
    const ref=useRef(null);
    
    const startPosition = ref?.current?.offsetTop;
    const endPosition = startPosition + ref?.current?.offsetHeight;
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <OurProcessSammury />
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>
          <div ref={ref}>
            {items.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={'Step 1'}
                number={index + 1}
                isLast={index === items.length - 1}
                description={`
         Only a handful of opportunities ever make it
onto our platform. Discover the steps an 
offering must go through to reach Finstreet
investors and what happens once it’s part of
your portfolio.
          `}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurProcess