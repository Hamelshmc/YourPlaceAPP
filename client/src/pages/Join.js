import React from 'react';
import styled from 'styled-components';
import SingIn from '../components/Login/Login';
import Register from '../components/Register/Register';
import { TabItem } from '../components/Tabs/styles/TabItem';
import Tabs from '../components/Tabs/Tabs';

const Join = () => (
  <TabSection>
    <Tabs defaultIndex="1" onTabClick={'1'}>
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
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  justify-content: space-around;
  min-width: 15rem;
  background-color: ${({ theme }) => theme.fontSizes.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
  input:checked + label {
    background-color: ${({ theme }) => theme.colors.primary.default};
    color: #fff;
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
  input[type='radio'] {
    display: none;
  }
`;

export default Join;
