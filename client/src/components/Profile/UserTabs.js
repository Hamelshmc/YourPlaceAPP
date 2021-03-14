/* eslint-disable complexity */
import React from 'react';
import styled from 'styled-components';
import ListPublication from '../Publication/ListPublication';
import LinkShowMore from '../Publication/styles/Publication/LinkShowMore';
import CardBookingVisit from '../shared/CardBookingVisit';
import TabItem from '../Tabs/styles/TabItem';
import Tabs from '../Tabs/Tabs';
import TabSectionReverse from './styles/TabSectionReverse';

const UserTabs = ({ publicationsUser, publicationsHistoryUser, bookings, requestBookings }) => (
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
        <TabSectionReverse>
          <Tabs defaultIndex="1" onTabClick="1">
            <TabItem label="Requests" index="1">
              <ListCard>
                {requestBookings &&
                  requestBookings.map((reqBooking) => (
                    <CardBookingVisit key={reqBooking.id} item={reqBooking} />
                  ))}
              </ListCard>
            </TabItem>
            <TabItem label="My bookings" index="2">
              {bookings &&
                bookings.map((booking) => (
                  <div key={booking.id}>
                    <p>Start date: {booking.start_date}</p>
                    <p>End date: {booking.end_date}</p>
                    <p>Acepted: {booking.acepted ? '✨ ¡Acepted! 🎉🎉' : 'Not acepted yet...'}</p>
                    {booking.acepted ? (
                      <LinkShowMore to={`/payment?/${booking.id_publication}`}>
                        Proceed to payment
                      </LinkShowMore>
                    ) : (
                      <></>
                    )}
                    <LinkShowMore to={`/publication/${booking.id_publication}`}>
                      Show publication
                    </LinkShowMore>
                    <LinkShowMore to={`/booking/edit/${booking.id}`}>
                      Edit your booking
                    </LinkShowMore>
                  </div>
                ))}
            </TabItem>
          </Tabs>
        </TabSectionReverse>
      </TabItem>
      <TabItem label="Visits" index="4">
        <h2>You dont have a visits history...</h2>
      </TabItem>
    </Tabs>
  </TabSectionReverse>
);

export default UserTabs;

const ListCard = styled.ul`
  padding: 0;
  margin: 0;
`;
