import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useRef } from 'react'
import OurProcessSammury from './LeftSection/OurProcessSammury';
import Slider from './Slider/Slider';
import TimelineItem from './timeline/TimelineItem';


const items = [
  {
    id: 1,
    caption:'Origination',
    title: 'Offerings are passed through a rigourous screening process',
    description:
      'Finstreet develops partnerships with originators through a stringent screening process. The Finstreet investment process takes a long-term view, looking for partners whom Finstreet and our investors can grow with beyond any given opportunity.',
    number: '1',
  },
  {
    id: 2,
    caption:'Due diligence',
    title: 'Next up: Finstreet’s internal due diligence review',
    description:
      'The investment team conducts their review and analysis of the investment opportunity, and if the team is comfortable with the opportunity, it will then go through the investment committees. During committee review, experienced investment professionals unassociated with the opportunity provide a fresh perspective and challenge the investment team’s thesis hoping to identify any potential risks.',
    number: '2',
  },
  {
    id: 3,
    caption:'Investment',
    title: 'Open offerings',
    description: <Slider/>,
    number: '3',
  },
  {
    id: 4,
    caption:'Performance',
    title: 'Track and monitor your alternative portfolio',
    description:
      'Typically, prior to the end of an investments term, performance will be reported to investors along the way. For debt investments, interest payments are often paid out on a monthly or quarterly basis and for certain equity deals, income payments may also be made. Behind the scenes, Yieldstreet’s Portfolio & Risk Management Team constantly monitors the investments and identifies any performance that has changed from initial underwriting.',
    number: '4',
  },
  {
    id: 5,
    caption:'Repayment and maturity',
    title: 'Get more returns on your returns',

    description: 'Whether a debt deal is maturing and the borrower is paying back principal or a commercial real estate property was just sold for a gain, after a successful investment your original principal and any associated gains will be returned to your Yieldstreet Wallet But, don’t let your money stay idle. One of the most important aspects to outperforming public markets is to keep your money invested and not to let it sit in cash. Consider investing in your next opportunity on Finstreet.',
    number: '5',
  },
];
function OurProcess() {
   
    const ref=useRef(null);
  return (
    <Container >
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <OurProcessSammury />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div ref={ref}>
            {items.map((item, index) => (
              <TimelineItem
                key={item.id}
                title={item.title}
                caption={item.caption}
                number={index + 1}
                isLast={index === items.length - 1}
                description={item.description}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OurProcess