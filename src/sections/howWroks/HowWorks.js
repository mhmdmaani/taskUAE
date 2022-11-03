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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien mollis elit sit praesent facilisis vivamus at habitant. Neque, condimentum maecenas laoreet id.',
    number: '01',
  },
  {
    id: 2,
    caption: 'How it works',
    title: 'Get access to the investing app',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien mollis elit sit praesent facilisis vivamus at habitant. Neque, condimentum maecenas laoreet id.',
    number: '02',
  },
  {
    id: 3,
    caption: 'How it works',
    title: 'Invest in stocks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien mollis elit sit praesent facilisis vivamus at habitant. Neque, condimentum maecenas laoreet id.',
    number: '03',
  },
  {
    id: 4,
    caption: 'How it works',
    title: ' Get your Consulting in time',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien mollis elit sit praesent facilisis vivamus at habitant. Neque, condimentum maecenas laoreet id.',
    number: '04',
  },

  {
    id: 5,
    caption: '',
    title: '',
    description:
      '',
    number: '',
  },
];

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: calc(${(props) => (props.itemsLength-1) * 100}vh - 900px);
`;

const StyledFixedContainer = styled.div`
  position: ${ (props) => props.isFixed ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 1s ease-in-out;
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
    if (position.scrollY <= startingPoint || position.scrollY >= endingPoint - threshold) {
      setIsShow(false);
    } else {
      const index = Math.floor(
        (position.scrollY - startingPoint ) / (threshold * (items.length-1))
      );
      if(index>=0 && index< items.length){
      setCurrentIndex(index);
       setIsShow(true);
      }else{
        setIsShow(false);
      }
     
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
      <StyledFixedContainer isFixed={isShow && currentIndex>=0 && currentIndex<=items.length-1 }>
    
        <Container >
          <Grid container >
            <Grid item lg={10} md={10} sm={12}>
              <Descriptions
                items={items}
                currentIndex={currentIndex < 0 ? 0 : currentIndex}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={12}>
             <Numbers items={items} currentIndex={currentIndex} onScroll={onScrollToSection} isLast={currentIndex>=items.length-1} />
            </Grid>
          </Grid>
        </Container>
      </StyledFixedContainer>
    </StyledContainer>
  );
}

export default HowWorks;
