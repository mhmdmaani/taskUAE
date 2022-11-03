import React from 'react'
import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi';



const BlackContainer = styled.div`
  padding: 30px 30px 50px 30px;
  border-radius: 40px;
  border: 1px solid #e5e5e5;
  background: ${(props) => props.background};
  text-align: left;
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  filter: ${(props) => (props.isBlured ? 'blur(2px)' : 'none')};
  transition: all 1s ease-in-out;
`;


const BlackTitle = styled.div`
    color: ${(props) => props.color};
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 10px;
`;

const BlackDescription = styled.div`
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: 400;
    margin-top: 20px;
`;

const LearnMore = styled.div`
    color: ${(props) => props.color};
    font-size: 1rem;
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const NumberDiv = styled.div`
    color: ${(props) => props.color};
    font-size: 2.5rem;
    font-weight: 800;
    position: absolute;
    bottom: 20px;
    right: 40px;
    opacity: 0.1;
`;

function BlackCard({title, description, number, isBlured}) {
  return (
    <BlackContainer isBlured={isBlured} background={'#fff'}>
      <BlackTitle color={'#333'}>{title}</BlackTitle>
      <BlackDescription color={'#9b9b9b'}>{description}</BlackDescription>
      <LearnMore color={'#333'}>Learn more
      <FiChevronRight/>
      </LearnMore>
      <NumberDiv color={'#333'}>{number}</NumberDiv>
    </BlackContainer>
  );
}

export default BlackCard;