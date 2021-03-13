import React from 'react';
import ListPublication from '../Publication/ListPublication';
import TabItem from '../Tabs/styles/TabItem';
import Tabs from '../Tabs/Tabs';
import TabSectionReverse from './styles/TabSectionReverse';

const UserTabs = ({ publicationsUser, publicationsHistoryUser }) => (
  <TabSectionReverse>
    <Tabs defaultIndex="1" onTabClick="1">
      <TabItem label="Publications" index="1">
        {publicationsUser.length > 0 ? (
          <ListPublication publications={publicationsUser} />
        ) : (
          <h2>You dont have any publication</h2>
        )}
      </TabItem>
      <TabItem label="Historical" index="2">
        {publicationsHistoryUser.length > 0 ? (
          <ListPublication publications={publicationsHistoryUser} />
        ) : (
          <h2>You dont have a history...</h2>
        )}
      </TabItem>
    </Tabs>
  </TabSectionReverse>
);

export default UserTabs;
