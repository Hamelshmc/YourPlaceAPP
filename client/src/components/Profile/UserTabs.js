/* eslint-disable complexity */
import React from 'react';
import ListPublication from '../Publication/ListPublication';
import LinkShowMore from '../Publication/styles/Publication/LinkShowMore';
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
        {requestBookings && requestBookings.length > 0 && <h2>Booking requests for you</h2>}
        {requestBookings && requestBookings.map((reqBooking) => (
          <div>
            <p>Start date: {new Date(reqBooking.start_date).toISOString().split('T')[0]}</p>
            <p>End date: {new Date(reqBooking.end_date).toISOString().split('T')[0]}</p>
            <p>Acepted: {reqBooking.acepted ? "✨ ¡Acepted! 🎉🎉" : "Not acepted yet..."}</p>
            {reqBooking.acepted ? <LinkShowMore to={`/payment/${reqBooking.id_publication}`} >Proceed to payment</LinkShowMore> : <></>}
            <LinkShowMore to={`/publication/${reqBooking.id_publication}`} >Show publication</LinkShowMore>
          </div>
        ))}
        {bookings.length > 0 && <h2>Your booking requests</h2>}
        {bookings && bookings.map((booking) => (
          <div>
            <p>Start date: {new Date(booking.start_date).toISOString().split('T')[0]}</p>
            <p>End date: {new Date(booking.end_date).toISOString().split('T')[0]}</p>
            <p>Acepted: {booking.acepted ? "✨ ¡Acepted! 🎉🎉" : "Not acepted yet..."}</p>
            {booking.acepted ? <LinkShowMore to={`/payment/${booking.id_publication}`} >Proceed to payment</LinkShowMore> : <></>}
            <LinkShowMore to={`/publication/${booking.id_publication}`} >Show publication</LinkShowMore>
          </div>
        ))}
        {/* {bookings && bookings.length > 0 ? (
          <h2>You have {bookings.length} bookings</h2>
        ) : (
          <h2>You dont have a booking history...</h2>
        )} */}
      </TabItem>
      <TabItem label="Visits" index="4">
        <h2>You dont have a visits history...</h2>
      </TabItem>
    </Tabs>
  </TabSectionReverse>
);

export default UserTabs;
