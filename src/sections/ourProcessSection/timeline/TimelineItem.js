import React from 'react'
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import {useWindowScrollPositions} from '../../../hooks/useWindowScrollPosition';


const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  margin-left: 100px;
  height: 100%;
  `;

  const StyledIndecatorSection = styled.div`
    height: 100%;
    position: absolute;
    flex-Direction: row;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

   const StyledTitle = styled.div`
     font-size: 1rem;
     color: ${(props) => (props.isStart ? '#2276ff' : '#151515')};
     font-weight: 400;
     position: absolute;
     left: -100px;
     top: 2rem;
   `;

    const StyledIndecatior = styled.div`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${(props) => (props.isStart ? '#2276ff' : '#c3c3c3')};
      color: #ffffff;
      position: absolute;
      top: 20px;
      left: -40px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;
    `;

    const StyledLine = styled.div`
      width: 2px;
      height: 105%;
      background-color: #c3c3c3;
      position: absolute;
      left: -21px;
      top: 20px;
      overflow: hidden;
      ::after {
        content: '';
        width: 2px;
        background-color: #2276ff;
        height: ${(props) => props?.progress?.toFixed(0)||0}px;
        transotion: all 2s ease-in-out;
        position: absolute;
        left: 0;
        top: 0;
      }
    `;


    const StyledDescription = styled.div`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #6d6d6d;
    font-weight: 400;
    width: 70%;
    text-align: left;
    margin-top: 1rem;
    paddiing-top: 2rem;
    padding-left: 1rem;
    `;

function TimelineItem({title, number, description, isLast}) {
     const {scrollY} = useWindowScrollPositions();   
     const ref = React.useRef(null);
        const [progress, setProgress] = React.useState(0);
        const [isStart, setIsStart] = React.useState(false);

        React.useEffect(() => {
             const startingPos = ref.current?.offsetTop ;
                const progress =
                  scrollY - startingPos + ref.current?.offsetHeight;
                   isLast? setProgress(progress+800):  setProgress(progress);
                if(progress > 0) {
                    setIsStart(true);
                }
                else{
                    setIsStart(false);
                }
        }, [scrollY]);


  return (
    <StyledContainer ref={ref}>
      <StyledIndecatorSection>
        <StyledTitle isStart={isStart}>{title}</StyledTitle>
        <StyledLine progress={progress}></StyledLine>
        <StyledIndecatior isStart={isStart}>{number}</StyledIndecatior>
      </StyledIndecatorSection>
      <StyledDescription>{description}</StyledDescription>
    </StyledContainer>
  );
}

export default TimelineItem