import React from 'react';
import ListPublication from '../Publication/ListPublication';
import TabItem from '../Tabs/styles/TabItem';
import Tabs from '../Tabs/Tabs';
import TabSectionReverse from './styles/TabSectionReverse';

const UserTabs = ({ publicationsUser, publicationsHistoryUser }) => (
  <TabSectionReverse>
    <Tabs defaultIndex="1" onTabClick="1">
      <TabItem label="Publications" index="1">
        <ListPublication publications={publicationsUser} />
      </TabItem>
      <TabItem label="Historical" index="2">
        <ListPublication publications={publicationsHistoryUser} />
      </TabItem>
    </Tabs>
  </TabSectionReverse>
);

export default UserTabs;
