import React from 'react';
import { Container, Grid } from '@mui/material';
import TransformedCard from '../../components/cards/TransformedCard';
import FlipTitle from '../../components/flipTitle/FlipTitle';
import styled from 'styled-components';

const solutions = [
  {
    id: 1,
    title: 'OFF grid deals',
    description:
      'Some companies have excellent investment potentional, but the lack of visibilty and access from Wall Street Sillicon Valley prespective.',
    number: '01',
  },
  {
    id: 2,
    title: 'Difficulty in origination.',
    description: `Funds manager only accept new monies
during thier fund-raising periods and then
call/invest the committed capital over the
following years ..`,
    number: '02',
  },

  {
    id: 3,
    title: 'OFF grid deals',
    description:
      'Some companies have excellent investment potentional, but the lack of visibilty and access from Wall Street Sillicon Valley prespective.',
    number: '03',
  },
];

const StyledTitle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  font-weight: 700;
`;

const DescriptionText = styled.div`
  width: 60%;
  min-width: 300px;
  height: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  color: #9b9b9b;
  text-align: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  @media (max-width: 600px) {
    width: auto;
  }
`;

function Solutions() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const isHoverCentered = hoveredCard?.id === 2;
  return (
    <Container>
      <FlipTitle
        isFliped={hoveredCard !== null}
        height={50}
        firstTitle={
          <StyledTitle>
            <span>
              You have these <span style={{ color: '#2678ff' }}>problems</span>
            </span>
          </StyledTitle>
        }
        secondTitle={
          <StyledTitle>
            <span>Finstreet has the </span>
          </StyledTitle>
        }
      />

      <FlipTitle
        isFliped={hoveredCard !== null}
        height={50}
        firstTitle={
          <StyledTitle>
            <span>with the bank</span>
          </StyledTitle>
        }
        secondTitle={
          <StyledTitle>
            <span style={{ color: '#2678ff' }}>Solution</span>
          </StyledTitle>
        }
      />
      <DescriptionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus
        tempor netus mattis. Mauris faucibus eget habitant nunc,
      </DescriptionText>

      <Grid isCenterHovered={isHoverCentered} container>
        {solutions.map((solution, index) => (
          <Grid
            key={index}
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            padding={3}
            style={{ position: 'relative' }}
          >
            <TransformedCard
              title={solution.title}
              description={solution.description}
              number={solution.number}
              isBlured={hoveredCard !== null && hoveredCard?.id !== solution.id}
              onEnter={() => setHoveredCard(solution)}
              onLeave={() => setHoveredCard(null)}
              isLeft={index === 0 || index % 3 === 0}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Solutions;
