import React, { useEffect } from 'react';
import styled from 'styled-components';
import SlideCard from './SlideCard';
import SlideImage from '../../../images/slideImage.svg';

const slides = [
  {
    image: SlideImage,
    title: 'Portland Multi-Family Financing',
    objective: 'Lorem ipsum dolor sit amet',
    focus: 'Lorem ipsum dolor sit amet',
    minInvest: 'Lorem ipsum dolor sit amet',
  },

  {
    image: SlideImage,
    title: 'Slide 1',
    objective: 'Slide 2',
    focus: 'Lorem ipsum dolor sit amet',
    minInvest: 'Lorem ipsum dolor sit amet',
  },
  {
    image: SlideImage,
    title: 'Slide 3',
    objective: 'Lorem ipsum dolor sit amet',
    focus: 'Lorem ipsum dolor sit amet',
    minInvest: 'Lorem ipsum dolor sit amet',
  },
];

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 300px;
  min-height: 600px;
  overflow-x: hidden;
`;

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;
const SliderButtons = styled.div`
    position: absolute;
    top calc(50%);
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`

const MovableCards = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s ease-in-out;
    transform: translateX(-${(props) => props.currentSlide * 10}%);
    `


const StyledDescription = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-left: -2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: ${(props) => (props.isStarted ? '#707070' : '#A0A0A0')};
  font-weight: 400;
  width: calc(100% - 50px);
  text-align: left;
  margin-bottom: 1rem;
`;

function Slider({isStarted}) {
    const ref = React.useRef(null);

    const [items, setItems] = React.useState(slides);
    const [currentSlide, setCurrentSlide] = React.useState(0);
   
   const onDragCard = (index) => {
    if(index< 0 || index > items.length - 1) {
    setCurrentSlide(currentSlide+1);
    }
   };

  return (
    <StyledMainContainer>
      <StyledDescription isStarted={isStarted}>
        Once an investment opportunity has made it to the Yieldstreet platform,
        it still is subject to what we consider the most important vetting
        stage: our investors' own decisions.
      </StyledDescription>
      <StyledDescription>
        Yieldstreet is ultimately all about empowering investors to exercise
        their own judgment, based on their own investment philosophies, and
        educated by the great wealth of information available to all of us.
      </StyledDescription>
      <StyledDescription>
        Just because we are comfortable offering a deal on the platform does not
        mean it is the right deal for any particular investor.
      </StyledDescription>
      <StyledDescription>Open offerings :</StyledDescription>
      <StyledContainer ref={ref}>
        <MovableCards slidesLength={items.length} currentSlide={currentSlide}>
          {items.map((slide, index) => (
            <SlideCard
              key={index}
              image={slide.image}
              title={slide.title}
              objective={slide.objective}
              focus={slide.focus}
              minInvest={slide.minInvest}
              index={index}
              currentSlide={currentSlide}
              onDragCard={onDragCard}
            />
          ))}
        </MovableCards>
        <SliderButtons>
          <button onClick={() => setCurrentSlide(currentSlide - 1)}>
            Prev
          </button>
          <button onClick={() => setCurrentSlide(currentSlide + 1)}>
            Next
          </button>
        </SliderButtons>
      </StyledContainer>
    </StyledMainContainer>
  );
}

export default Slider;
