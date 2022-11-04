import React from 'react'
import styled from 'styled-components';
import {useWindowScrollPositions} from '../../../hooks/useWindowScrollPosition';


const StyledContainer = styled.div`
  position: relative;
  padding-left: 100px;
  height: 100%;
  padding-top: 2.5rem;
   @media (max-width: 897px) {
     padding-left: 2rem;
  }
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
     font-weight: 600;
     color:${props=>props.isStart?'#151515':'#6d6d6d'};
     margin-bottom: 1rem;
     margin-top: 1.6rem;
   `;

    const StyledIndecatior = styled.div`
      overflow: hidden;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: #c3c3c3;
      color: #ffffff;
      position: absolute;
      top: 26px;
      left: -33px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.5s ease-in-out;

      ::before {
        content: '';
        position: absolute;
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        top: ${(props) => (props.isStart ? '0' : '-100%')};
        transition: all 0.5s ease-in-out;
        left: 0;
        width: 24px;
        height: 24px;
        
        background-color: #2276ff;
       
      }
    `;

    const StyledLine = styled.div`
      width: 2px;
      height: 105%;
      background-color: #c3c3c3;
      position: absolute;
      left: -21px;
      top: 27px;
      overflow: hidden;
      ::after {
        content: '';
        width: 2px;
        background-color: #2276ff;
        height: ${(props) => props?.progress?.toFixed(0)||0}px;
        transotion: all 0.5s ease-in-out;
        position: absolute;
        left: 0;
        top: 0;
      }
    `;


    const StyledDescription = styled.div`
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => (props.isStart ? '#707070' : '#A0A0A0')};
      font-weight: 400;
      text-align: left;
      margin-top: 1rem;
      padding-left: 1rem;
      width: calc(78%);
    `;


    const StyledCaption = styled.div`
      font-size: 1rem;
      color: #151515;
      font-weight: 400;
      position: absolute;
      left: -150px;
      width: 100px;
      top: 1.7rem;
      @media (max-width: 897px) {
        left: 1rem;
        top: 0;
        text-align: left;
        width: 200px;
        font-size: 0.8rem;
      }
    `;

  const StyledNumber= styled.div`
    font-size: 1rem;
    position: absolute;
    top:calc(50% - 0.6rem);
     width: 100%;
     background-color: transparent;
     z-index: 99;
     `;

function TimelineItem({title, number, description,caption, isLast}) {
     const {scrollY} = useWindowScrollPositions();   
     const ref = React.useRef(null);
     const indecatorRef = React.useRef(null);

        const [progress, setProgress] = React.useState(0);
        const [isStart, setIsStart] = React.useState(false);

        React.useEffect(() => {
             const startingPos = ref.current?.offsetTop -600;
              
             if(scrollY > startingPos){
                // setIsStart(true);
                 setProgress(scrollY - startingPos);
             }
             if(scrollY > startingPos){
                 setIsStart(true);
             }else{
              setIsStart(false);
             }

               
              
        }, [scrollY]);


  return (
    <StyledContainer isLast={isLast} ref={ref}>
      <StyledIndecatorSection>
        <StyledCaption isStart={isStart}>{caption}</StyledCaption>
        {isLast ? null : (
         <StyledLine progress={progress}></StyledLine>)}
        
        <StyledIndecatior
          ref={indecatorRef}
          progress={scrollY - indecatorRef.current?.offsetTop}
          isStart={isStart}
          number={number}
        >
          <StyledNumber>{number}</StyledNumber>
        </StyledIndecatior>
      </StyledIndecatorSection>
      <StyledDescription isStart={isStart}>
        <StyledTitle isStart={isStart}>{title}</StyledTitle>
        {description}
      </StyledDescription>
    </StyledContainer>
  );
}

export default TimelineItem