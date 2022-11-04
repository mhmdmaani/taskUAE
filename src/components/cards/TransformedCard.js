import React from 'react'
import styled from 'styled-components';
import BlackCard from './BlackCard';
import ColoredCard from './ColoredCard';




const specifyTransform = (props) => {
  if (props.isHovered && props.isDisplayed) {
    return `scale3d(1.1,1.1,1.1)  translateY(-1rem)`;
  }
  if (props.isDisplayed) {
    return `scale3d(1,1,1) `;
  }
  return 'scale3d(0,0,0)';
}

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  min-height: 300px;
  min-width: 300px;
  @media (max-width: 600px) {
    min-width: auto;
  }
`;
const StyledSection = styled.div`
  transform: ${props=>specifyTransform(props)};
  transform-origin: 'center';
  opacity: ${(props) => (props.isDisplayed ? '1' : '0.2')};
  transition: transform 0.8s ease-in-out, opacity 1s ease-in-out,
  filter 1s ease-in-out;
  width: 100%;
  position: absolute;
  top: 0;
  left:0;
`;

function TransformedCard({title, description, number,isBlured=false ,isLeft=false ,onEnter, onLeave}) {
    const [isHovered, setIsHovered] = React.useState(false);

    const onMouseEnter = () => {
        setIsHovered(true);
        onEnter();
    }
    const onMouseLeave = () => {
        setIsHovered(false);
        onLeave();
    }
  return (
    <StyledContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <StyledSection
        isHovered={isHovered}
        isDisplayed={!isHovered}
        isLeft={isLeft}
      >
        <ColoredCard
          title={title}
          description={description}
          number={number}
          isBlured={isBlured}
          isHidden={isHovered}
        />
      </StyledSection>

      <StyledSection
        isBlured={isBlured}
        isHovered={isHovered}
        isDisplayed={isHovered}
      >
        <BlackCard
          title={title}
          description={description}
          number={number}
          isBlured={isBlured}
        />
        {
          
        }
      </StyledSection>
    </StyledContainer>
  );
}

export default TransformedCard