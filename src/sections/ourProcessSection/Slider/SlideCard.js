import React from 'react';
import styled from 'styled-components';
import { useWindowScrollPositions } from '../../../hooks/useWindowScrollPosition';

const StyledContainer = styled.div`
  width: ${(props) => props.cardWidth}px;
  background-color: #f7f8f9;
  border-radius: 2rem;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: ${(props) =>
    props.currentSlide === props.index ? 0 : props.index * 100}px;
  z-index: ${(props) =>
    props.currentSlide === props.index ? 100 : 100 - props.index};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  transition: all 1s ease-in-out;
  transform: ${(props) =>
    props.currentSlide === props.index
      ? `scale(1,1) translateX(${props.index * 100}px)`
      : `scale(${1.2 / (props.index + 1)},${1 / (props.index + 1)})`};
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 2rem;
  filter: ${(props) => ( !props.isStart?'grayscale(100%)':props.isActive?'none':'blur(2px)')};
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

function SlideCard({
  image,
  title,
  objective,
  focus,
  minInvest,
  index,
  onDragCard,
  currentSlide,
}) {
  const cardWidth = 300;
  const dragStart = (e) => {
    e.stopPropagation();
    //  e.dataTransfer.setData('card_id', target.id);
    onDragCard(index);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
const {scrollY} = useWindowScrollPositions();
const ref = React.useRef(null);

const [isStart, setIsStart] = React.useState(false);


    React.useEffect(() => {
        if (scrollY > ref.current.offsetTop ) {
            setIsStart(true);
        } else {
            setIsStart(false);
        }
    }, [scrollY]);


  return (
    <StyledContainer
      draggable={true}
      onDragStart={dragStart}
      onDragOver={dragOver}
      index={index}
      currentSlide={currentSlide}
      cardWidth={cardWidth}
      ref={ref}
    >
      <StyledImage isActive = {currentSlide===index} isStart={isStart} src={image} />
      <StyledTitle>{title}</StyledTitle>
      <InfoRow>
        <span>Objective</span>
        <span>{objective}</span>
      </InfoRow>

      <InfoRow>
        <span>Focus</span>
        <span>{focus}</span>
      </InfoRow>

      <InfoRow>
        <span>Min .Invest</span>
        <span>{minInvest}</span>
      </InfoRow>
    </StyledContainer>
  );
}

export default SlideCard;
