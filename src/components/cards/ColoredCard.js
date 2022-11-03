import React from 'react'
import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi';




const ColoredContainer = styled.div`
  padding: 30px 30px 50px 30px;
  border-radius: 40px;
  background: ${(props) => props.isHidden?'#333': props.background};
  text-align: left;
  position: relative;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  filter: ${props=>props.isBlured?'blur(2px)':'none'};
  transition: all 0.8s ease-in-out;
`;


const ColoredTitle = styled.div`
    color: ${(props) => props.color}; 
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 10px;
`;

const ColoredDescription = styled.div`
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: 400;
    margin-top: 20px;
`;

const LearnMore = styled.div`
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: 500;
    margin-top: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const NumberDiv = styled.div`
    color: ${(props) => props.color};
    font-size: 2rem;
    font-weight: 800;
    position: absolute;
    bottom: 20px;
    right: 40px;
    opacity: 0.1;
`;

function ColoredCard({title, description, number, isBlured=false, isHidden=false}) {
  return (
    <ColoredContainer isHidden={isHidden} background={'#f8fbff'} isBlured={isBlured}>
      <ColoredTitle color={'#2678ff'}>{title}</ColoredTitle>
      <ColoredDescription color={'#9b9b9b'}>{description}</ColoredDescription>
    
        <LearnMore color={'#2678ff'}>
          Learn more
          <FiChevronRight />
        </LearnMore>
      <NumberDiv color={'#2678ff'}>{number}</NumberDiv>
    </ColoredContainer>
  );
}

export default ColoredCard;