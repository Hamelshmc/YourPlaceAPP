import React from 'react';
import styled from 'styled-components';
import Publication from '../components/Publication/ListPublication';
import WelcomeContainer from '../components/Welcome/Welcome';

const Home = () => (
  <SectionWrapper>
    <WelcomeContainer />
    <Publication />
  </SectionWrapper>
);

const SectionWrapper = styled.section`
  grid-row: 2;
`;

export default Home;
