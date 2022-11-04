import React from 'react';
import styled from 'styled-components';
import { useWindowScrollPositions } from '../../../hooks/useWindowScrollPosition';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useMediaQuery } from '@mui/material';

const StyledContainer = styled.div`
  width: ${(props) => props.cardWidth}px;
  background-color: #f7f8f9;
  border-radius: 1.5rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: ${(props) => props.index * 22}%;
  z-index: ${(props) => (props.isCurrent ? 100 : 100 - props.index)};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
  transition: all 1s ease-in-out;
  filter: ${(props) => (props.isCurrent ? '' : 'blur(2.4px)')};
  opacity: ${(props) => (props.index<props.current ? 0 : 1)};
  transform: ${(props) =>
    props.isCurrent===true
      ?'scale3d(1,1,1)'
      : `scale3d(${1 - props.index * 0.24},${1 - props.index * 0.24},${
          1 - props.index * 0.24
        })`};
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  filter: ${(props) =>
    !props.isStart ? 'grayscale(100%)' : props.isActive ? 'none' : 'blur(2px)'};
`;

const StyledTitle = styled.h5`
  font-size: 1.5rem;
  color:#151515;
  font-weight: 500;
    margin: 2rem 0;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 2.5rem;
`;

const SliderButtons = styled.div`
  position: absolute;
  top: 50%;
  left: -2rem;
  right: 0;
  display: flex;
  opacity: ${props=> props.isDisplayed?'1':'0'};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const IconContainer = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 6%) 0px 4px 8px;
  height: 64px;
  top: 47%;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
    opacity: ${(props) => (props.isDisplayed ? 1 : 0)};
    pointer-events: ${(props) => (props.isDisplayed ? 'auto' : 'none')};
    transition: all 0.7s ease-in-out;
`;


const StyledValues = styled.span`
  font-size: 1.1rem;
  color: #151515;
  font-weight: 600;
  font-family: sans-serif;
`;


function SlideCard({
  image,
  title,
  objective,
  focus,
  minInvest,
  index,
  onDragCard,
  currentSlide,
  onGoNext,
  onGoPrev,
  itemsLength,
}) {
    const isSm = useMediaQuery('(max-width: 600px)');

  const cardWidth = isSm?150: 250;
  const dragStart = (e) => {
    e.stopPropagation();
    //  e.dataTransfer.setData('card_id', target.id);
    onDragCard(index);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  const { scrollY } = useWindowScrollPositions();
  const ref = React.useRef(null);

  const [isStart, setIsStart] = React.useState(false);
  const [isLeft, setIsLeft] = React.useState(false);

  React.useEffect(() => {
    if (scrollY > ref.current.offsetTop) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
  }, [scrollY]);

  const handleGoNext = () => {
    setIsLeft(false);
    onGoNext();
  };

  const handleGoPrev = () => {
    setIsLeft(true);
    onGoPrev();
  };
  return (
    <StyledContainer
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
      isCurrent={currentSlide === index}
      current={currentSlide}
      cardWidth={cardWidth}
      index={index}
      ref={ref}
    >
      <StyledImage
        isActive={currentSlide === index}
        isStart={isStart}
        src={image}
      />
      <StyledTitle>{title}</StyledTitle>
      <InfoRow>
        <span>Objective</span>
        <StyledValues>{objective}</StyledValues>
      </InfoRow>

      <InfoRow>
        <span>Focus</span>
        <StyledValues>{focus}</StyledValues>
      </InfoRow>

      <InfoRow>
        <span>Min .Invest</span>
        <StyledValues>{minInvest}</StyledValues>
      </InfoRow>

      <SliderButtons isDisplayed={currentSlide === index}>
        <IconContainer isDisplayed={index > 0} onClick={handleGoPrev}>
          <FiChevronLeft />
        </IconContainer>

        <IconContainer
          isDisplayed={index < itemsLength - 1}
          onClick={handleGoNext}
        >
          <FiChevronRight />
        </IconContainer>
      </SliderButtons>
    </StyledContainer>
  );
}

export default SlideCard;
