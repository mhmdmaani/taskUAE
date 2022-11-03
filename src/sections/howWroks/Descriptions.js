import { useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MultipleFlipTitle from '../../components/flipTitle/MultipleFlipTitle';

const StyledTag = styled.div`
  font-size: 3.3rem;
  color: #2276ff;
  font-weight: 700;
  width: 100%;
 
`;



const StyledDescription = styled.div`
  font-size: 1.5rem;
  color: #6d6d6d;
  font-weight: 400;
  width: 70%;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
 justify-content: center;
 align-items: flex-start;
 text-align: left;
 flex-direction: column;
 position: relative;
`;

const StyledCaption = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
    margin-bottom:1.1rem;
    text-transform: uppercase;
    `;

    const StyledSpacer = styled.div`
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
    `;

function Descriptions({ items, currentIndex }) {
     const isMobile = useMediaQuery('(max-width: 1024)');
     const flippedTitleHeight = isMobile ? 50 : 80;
     const flippedDescriptionHeight = isMobile ? 150 : 150;
  return (
    <StyledContainer>
      <StyledCaption>{items[currentIndex].caption}</StyledCaption>
      <StyledSpacer />
      <MultipleFlipTitle
        height={flippedTitleHeight}
        texts={items.map((c) => ({
          id: c.id,
          text: <StyledTag>{c.title}</StyledTag>,
        }))}
        currentIndex={currentIndex}
      />
      <StyledSpacer />
      <MultipleFlipTitle
        height={flippedDescriptionHeight}
        texts={items.map((c) => ({
          id: c.id,
          text: <StyledDescription>
            {c.description}</StyledDescription>,
        }))}
        currentIndex={currentIndex}
      />
    </StyledContainer>
  );
}

export default Descriptions;
