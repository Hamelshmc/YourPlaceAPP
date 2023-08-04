import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../hooks/UserContext';
import ListPublication from '../Publication/ListPublication';
import CardBookingVisit from '../shared/CardBookingVisit';
import UserCommentRating from '../shared/UserCommentRating';
import TabItem from '../Tabs/styles/TabItem';
import Tabs from '../Tabs/Tabs';
import TabSectionReverse from './styles/TabSectionReverse';

const UserTabs = ({
  publicationsUser,
  publicationsHistoryUser,
  bookings,
  requestBookings,
  visits,
  requestVisits,
  id,
  rating,
}) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <TabSectionReverse>
      <Tabs defaultIndex="1" onTabClick="1">
        <TabItem label="Publications" index="1">
          {publicationsUser && publicationsUser.length > 0 ? (
            <ListPublication publications={publicationsUser} />
          ) : (
            <h2>You dont have any publication</h2>
          )}
        </TabItem>
        {id === user.id ? (
          <TabItem label="Historical" index="2">
            {publicationsHistoryUser && publicationsHistoryUser.length > 0 ? (
              <ListPublication publications={publicationsHistoryUser} />
            ) : (
              <h2>You dont have a publications history...</h2>
            )}
          </TabItem>
        ) : (
          <></>
        )}
        {id === user.id ? (
          <TabItem label="Bookings" index="3">
            <TabSectionReverse>
              <Tabs defaultIndex="1" onTabClick="1">
                <TabItem label="Requests" index="1">
                  <ListCard>
                    {requestBookings &&
                      requestBookings.map((reqBooking) => (
                        <CardBookingVisit aceptButtons key={reqBooking.id} item={reqBooking} />
                      ))}
                  </ListCard>
                </TabItem>
                <TabItem label="My bookings" index="2">
                  <ListCard>
                    {bookings &&
                      bookings.map((booking) => (
                        <CardBookingVisit key={booking.id} item={booking} />
                      ))}
                  </ListCard>
                </TabItem>
              </Tabs>
            </TabSectionReverse>
          </TabItem>
        ) : (
          <></>
        )}
        {id === user.id ? (
          <TabItem label="Visits" index="4">
            <TabSectionReverse>
              <Tabs defaultIndex="1" onTabClick="1">
                <TabItem label="Requests" index="1">
                  <ListCard>
                    {requestVisits &&
                      requestVisits.map((reqVisit) => (
                        <CardBookingVisit aceptButtons key={reqVisit.id} item={reqVisit} />
                      ))}
                  </ListCard>
                </TabItem>
                <TabItem label="My visits" index="2">
                  <ListCard>
                    {visits &&
                      visits.map((visit) => <CardBookingVisit key={visit.id} item={visit} />)}
                  </ListCard>
                </TabItem>
              </Tabs>
            </TabSectionReverse>
          </TabItem>
        ) : (
          <></>
        )}
        <TabItem label="Comments" index="5">
          {rating && rating.length > 0 ? (
            <UserCommentRating item={rating} />
          ) : (
            <h2>You dont have any publication</h2>
          )}
        </TabItem>
      </Tabs>
    </TabSectionReverse>
  );
};
export default UserTabs;

const ListCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
  margin: 1rem;
  padding: 0;
  @media (min-width: 1281px) {
    justify-content: center;
    align-items: center;
    grid-gap: 1.5rem;
    margin: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }
`;
