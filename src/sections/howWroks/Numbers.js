import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  @media (max-width: 892px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
  }
`;

const StyledNumber = styled.button`
  font-size: ${(props) => (props.current ? '4.5rem' : '2.75rem')};
  color: ${(props) => (props.current ? '#2276ff' : '#D0D0D0')};
  font-weight: 700;
  width: 100%;
  margin-bottom: 2rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease;
  @media (max-width: 1024px) {
    margin-left: 5px;
    margin-right: 5px;
  }
  @media (max-width: 892px) {
    font-size: 1rem;
    width: auto;
  }
`;

const StyledIndicator = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  border-radius: 10px;
  right: -210%;
  width: 150%;
  transform: translateX(${(props) => (props.current ? '-50%' : '0')});
  opacity: ${(props) => (props.current ? '1' : '0')};
  height: 3px;
  background-color: ${(props) => (props.current ? '#2276ff' : '#D0D0D0')};
  transition: all 0.5s ease-in-out;
  @media (max-width: 560px) {
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    transform: scaleX(${(props) => (props.current ? '2' : '0')});
    display:none;
  }
`;
function Numbers({ items, currentIndex, onScroll }) {
  return (
    <StyledContainer>
      {items.map((c, index) => (
        <StyledContainer key={index}>
          <StyledNumber
            onClick={() => onScroll(index)}
            current={index === currentIndex}
          >
            {c.number}
          </StyledNumber>
          <StyledIndicator current={index === currentIndex} />
        </StyledContainer>
      ))}
    </StyledContainer>
  );
}

export default Numbers;
