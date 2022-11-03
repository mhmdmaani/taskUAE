import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    text-align: left;
`;
const StyledCaption = styled.div`
  color: #8f8f8f;
  font-size: 1.5rem;
  font-weight: 400;
`;

const StyledTitle = styled.div`
    font-size: 2.5rem;
    color: #000;
    font-weight: 700;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;
const StyledDescription = styled.div`
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #6d6d6d;
    font-weight: 400;
    width: 70%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  background-color: #2678ff10;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  padding: 20px 40px;
  transition: all 0.3s ease;
  color: #2678ff;
  border-radius: 10px;
  margin-top: 2rem;
  &:hover {
    background-color: #2678ff;
    color: #fff;
  }
`;
function OurProcessSammury() {
  return (
    <StyledContainer> 
        <StyledCaption>Our Process</StyledCaption>
        <StyledTitle>We have our own process for success</StyledTitle>
        <StyledDescription>
            We are a team of experienced professionals with a passion for
            technology and a desire to help businesses grow. We are a team of
            experienced professionals with a passion for technology and a desire
            to help businesses grow.
        </StyledDescription>
        <StyledButton>Learn More</StyledButton>
    </StyledContainer>
  )
}

export default OurProcessSammury