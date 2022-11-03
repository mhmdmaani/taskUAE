import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  height: ${(props) => props.height}px;
  overflow: hidden;
`;
const Flipped = styled.div`
  transition: transform 1s ease-in-out, opacity 1.1s ease-in-out;
  transform:  ${(props) => props.isFliped ? 'translateY(-50%)' : 'translateY(0)'};
  
`;
const Section = styled.div`
  height: ${(props) => props.height}px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.height}px;
  opacity: ${(props) => props.isDisplayed ? '1' : '0'};
  transition: opacity 0.7s ease-in-out;
`;




function FlipTitle({isFliped=false,height ,firstTitle='firstTitle', secondTitle='secondTitle',props}) {




  return (
    <StyledContainer height={height}>
      <Flipped isFliped={isFliped} height={height}>
        <Section isDisplayed={!isFliped} height={height}>
          {firstTitle}
        </Section>
        <Section isDisplayed={isFliped} height={height}>
          {secondTitle}
        </Section>
      </Flipped>
    </StyledContainer>
  );
}

export default FlipTitle