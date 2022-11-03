import React from 'react'
import styled from 'styled-components';
import SlideCard from './SlideCard';



const StyledContainer = styled.div`
    width: 75%;
    height: 100%;
    position: relative;
    min-width: 300px;
`;




function Slider() {
  return (
    <StyledContainer>
        <SlideCard/>
    </StyledContainer>
  )
}

export default Slider