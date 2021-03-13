/* eslint-disable complexity */
import React from 'react';
import ListPublication from '../Publication/ListPublication';
import TabItem from '../Tabs/styles/TabItem';
import Tabs from '../Tabs/Tabs';
import TabSectionReverse from './styles/TabSectionReverse';

const UserTabs = ({ publicationsUser, publicationsHistoryUser, bookings }) => (
  <TabSectionReverse>
    <Tabs defaultIndex="1" onTabClick="1">
      <TabItem label="Publications" index="1">
        {publicationsUser && publicationsUser.length > 0 ? (
          <ListPublication publications={publicationsUser} />
        ) : (
          <h2>You dont have any publication</h2>
        )}
      </TabItem>
      <TabItem label="Historical" index="2">
        {publicationsHistoryUser && publicationsHistoryUser.length > 0 ? (
          <ListPublication publications={publicationsHistoryUser} />
        ) : (
          <h2>You dont have a publications history...</h2>
        )}
      </TabItem>
      <TabItem label="Bookings" index="3">
        {bookings && bookings.length > 0 ? (
          <h2>You have {bookings.length} bookings</h2>
        ) : (
          <h2>You dont have a booking history...</h2>
        )}
      </TabItem>
      <TabItem label="Visits" index="4">
        <h2>You dont have a visits history...</h2>
      </TabItem>
    </Tabs>
  </TabSectionReverse>
);

export default UserTabs;
