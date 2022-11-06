import { Container, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import MultipleFlipTitle from '../../components/flipTitle/MultipleFlipTitle';

const StyledTag = styled.div`
  font-size: 3.3rem;
  color: #2276ff;
  font-weight: 700;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 2rem
  }
  @media (max-width: 427px) {
    font-size: 1.5rem
  }
`;



const StyledDescription = styled.div`
  font-size: 1.5rem;
  color: #6d6d6d;
  font-weight: 400;
  width: 70%;
  @media (max-width: 600px) {
    font-size: 1rem;
    width: 100%;
  }
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
    @media (max-width: 600px) {
      font-size: 1rem;
      margin-top: 1rem;
    }
    `;

    const StyledSpacer = styled.div`
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
    `;

function Descriptions({ items, currentIndex }) {
     const isMed = useMediaQuery('(max-width: 1024)');
     const isSm = useMediaQuery('(max-width: 600px)');
      const spicifyTitleHeight =()=> {
         if(isMed){
             return 80;
         }
          if(isSm){
              return  50;
          }
          return 100;
      }

      const spicfyDescriptionHeight =()=> {
          if(isMed){
              return 100;
          }
            if(isSm){
                return  80;
            }
            return 150;
      }

  return (
    <StyledContainer>
      <StyledCaption>{items[currentIndex].caption}</StyledCaption>
      <StyledSpacer />
      <MultipleFlipTitle
        height={spicifyTitleHeight()}
        texts={items.map((c) => ({
          id: c.id,
          text: <StyledTag>{c.title}</StyledTag>,
        }))}
        currentIndex={currentIndex}
      />
      <StyledSpacer />
      <MultipleFlipTitle
        height={spicfyDescriptionHeight()}
        texts={items.map((c) => ({
          id: c.id,
          text: <StyledDescription>{c.description}</StyledDescription>,
        }))}
        currentIndex={currentIndex}
      />
    </StyledContainer>
  );
}

export default Descriptions;
