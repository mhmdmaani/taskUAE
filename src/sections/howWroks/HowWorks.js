import React, { useEffect } from 'react';
import { useWindowScrollPositions } from '../../hooks/useWindowScrollPosition';
import styled from 'styled-components';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Descriptions from './Descriptions';
import Numbers from './Numbers';

const items = [
  {
    id: 1,
    caption: 'How it works',
    title: 'Open your account',
    description: 'Open an account in minutes online and start investing today.',
    number: '01',
  },
  {
    id: 2,
    caption: 'How it works',
    title: 'getAccess to the investing app',
    description: 'Get your investing app on your phone or tablet.',
    number: '02',
  },
  {
    id: 3,
    caption: 'How it works',
    title: 'Invest in stocks',
    description: 'Open an account in minutes online and start investing today.',
    number: '03',
    
  },
    {
    id: 4,
    caption: 'How it works',
    title: ' Get your Consulting in time',
    description: 'We provide you with the best consulting services.',
    number: '04',
    }
];

const StyledContainer = styled.div`
  width: 100%;
  height: ${(props) => props.itemsLength * 100}vh;
  overflow: hidden;
`;

const StyledFixedContainer = styled.div`
  position: ${(props) => (props.isFixed === true ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


function HowWorks() {
  const position = useWindowScrollPositions();
  const ref = React.useRef(null);
  const [isShow, setIsShow] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const threshold = 100;
    // get top and bottom position of the element
    const startingPoint = ref.current.offsetTop;
    const endingPoint = ref.current.scrollTop + ref.current.clientHeight;
    // check if the element is in the viewport
    if (position.scrollY <= startingPoint || position.scrollY >= endingPoint) {
      setIsShow(false);
    } else {
      const index = Math.floor(
        (position.scrollY - startingPoint - 200) / (threshold * items.length -1)
      );
      if(index>=0 && index<items.length - 1){
      setCurrentIndex(index);
      }
      setIsShow(true);
    }
  }, [position]);


  const onScrollToSection = (index) => {
    setCurrentIndex(index);
    const threshold = 150;
       const startingPoint = ref.current.offsetTop;
      
         const scrollY = startingPoint + (ref.current.clientHeight/items.length) * index+threshold;
  window.scrollTo(0, scrollY);

  }
  return (
    <StyledContainer ref={ref} itemsLength={items.length}>
      <StyledFixedContainer isFixed={isShow}>
        <Container >
          <Grid container >
            <Grid item lg={10} md={10} sm={12}>
              <Descriptions
                items={items}
                currentIndex={currentIndex < 0 ? 0 : currentIndex}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={12}>
             <Numbers items={items} currentIndex={currentIndex} onScroll={onScrollToSection} />
            </Grid>
          </Grid>
        </Container>
      </StyledFixedContainer>
    </StyledContainer>
  );
}

export default HowWorks;
