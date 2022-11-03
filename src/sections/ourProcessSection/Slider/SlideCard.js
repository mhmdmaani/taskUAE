import React from 'react'
import styled from 'styled-components';


const StyledContainer = styled.div`
    width: 100%;
    background-color: #F7F8F9;
    border-radius: 2rem;
    `;

    const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 2rem;
    `;

    const StyledTitle = styled.h5`
    font-size: 1.5rem;
    font-weight: 400;
    `;

    const InfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `;

function SlideCard({image, title, objective, focus, minInvest}) {
  return (
    <StyledContainer>
      <StyledImage src={image} />
      <StyledTitle>{title}</StyledTitle>
      <InfoRow>
        <span>Objective</span>
        <span>{objective}</span>
      </InfoRow>
      
    </StyledContainer>
  );
}

export default SlideCard