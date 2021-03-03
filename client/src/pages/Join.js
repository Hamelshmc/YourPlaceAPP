import React from 'react';
import styled from 'styled-components';
import SingIn from '../components/Login/Login';
import Register from '../components/Register/Register';
import TabItem from '../components/Tabs/styles/TabItem';
import Tabs from '../components/Tabs/Tabs';

const Join = () => (
  <TabSection>
    <Tabs defaultIndex="1" onTabClick="1">
      <TabItem label="Login" index="1">
        <SingIn />
      </TabItem>
      <TabItem label="Register" index="2">
        <Register />
      </TabItem>
    </Tabs>
  </TabSection>
);

const TabSection = styled.section`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: clamp(15.5rem, 50%, 25rem);
`;

export default Join;
