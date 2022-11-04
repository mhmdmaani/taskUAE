import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    text-align: left;
    position: relative;
`;
const StyledCaption = styled.div`
  color: #8f8f8f;
  font-size: 1.2rem;
  font-weight: 400;
`;

const StyledTitle = styled.div`
    font-size: 2rem;
    color: #000;
    font-weight: 700;
    width: 65%;
    min-width: 200px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      min-width: auto;
    }
`;
const StyledDescription = styled.div`
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #6d6d6d;
    font-weight: 400;
    width: 70%;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const StyledButton = styled.button`
  min-width: 180px;
  padding: 15px 24px;
  cursor: pointer;
  font-family: 'Linik Sans', Arial, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  position: relative;
  text-align: center;
  outline: none;
  transition: all 0.2s ease-in-out 0s;
  background-color: #eaf2ff;
  border: 1px solid #eaf2ff;
  border-radius: 6px;
  color: #2678FF;
  margin-top:1.5rem;
  :hover {
    background-color: #d4e4ff;
    color: #0060ff;
  }
  @media (max-width: 600px) {
    min-width: auto;
  }
`;


const StyledSticky = styled.div`
    position: sticky;
    top: 200px;
  `;

function OurProcessSammury() {
  return (
    <StyledContainer>
      <StyledSticky>
        <StyledCaption>Our Process</StyledCaption>
        <StyledTitle>
          From the market to
          <br /> your portfolio, here's
          <br /> how it all happens
        </StyledTitle>
        <StyledDescription>
          Only a handful of opportunities ever make it onto our platform.
          Discover the steps an offering must go through to reach Finstreet
          investors and what happens once it’s part of your portfolio.
        </StyledDescription>
        <StyledButton>Become a member</StyledButton>
      </StyledSticky>
    </StyledContainer>
  );
}

export default OurProcessSammury