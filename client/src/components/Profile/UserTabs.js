import React from 'react';
import ListPublication from '../Publication/ListPublication';
import Publication from '../Publication/Publication';
import TabItem from '../Tabs/styles/TabItem';
import Tabs from '../Tabs/Tabs';
import TabSectionReverse from './styles/TabSectionReverse';

const UserTabs = () => {
  return (
    <TabSectionReverse>
      <Tabs defaultIndex="1" onTabClick="1">
        <TabItem label="Publications" index="1">
          <Publication />
        </TabItem>
        <TabItem label="Historical" index="2">
          <ListPublication />
        </TabItem>
      </Tabs>
    </TabSectionReverse>
  );
};

export default UserTabs;
