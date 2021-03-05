import React from 'react';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import TabItem from '../components/Tabs/styles/TabItem';
import TabSection from '../components/Tabs/styles/TabSection';
import Tabs from '../components/Tabs/Tabs';

const Join = () => (
  <TabSection>
    <Tabs defaultIndex="1" onTabClick="1">
      <TabItem label="Login" index="1">
        <Login />
      </TabItem>
      <TabItem label="Register" index="2">
        <Register />
      </TabItem>
    </Tabs>
  </TabSection>
);

export default Join;
