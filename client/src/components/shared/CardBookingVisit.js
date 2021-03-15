/* eslint-disable complexity */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import LinkShowMore from '../Publication/styles/Publication/LinkShowMore';

function CardBookingVisit({ item, aceptButtons }) {
  const {
    city,
    deposit,
    end_date,
    price,
    start_date,
    street,
    id_publication,
    id,
    acepted,
    visit_date,
    visit_hour,
  } = item;
  return (
    item && (
      <CardWrapper>
        <CardDirection>
          {street} • {city}
        </CardDirection>
        <CardDateContent>
          {start_date && end_date ? (
            <>
              <CardDate>
                Start date <Date>{start_date}</Date>
              </CardDate>
              <CardDate>
                End date <Date>{end_date}</Date>
              </CardDate>
            </>
          ) : (
            <>
              <CardDate>
                Visit date <Date>{visit_date}</Date>
              </CardDate>
              <CardDate>
                Visit hour <Date>{visit_hour}</Date>
              </CardDate>
            </>
          )}
        </CardDateContent>
        {start_date && end_date ? (
          <>
            <CardDateContent>
              <CardDate>
                Price:<Date>{price}€</Date>
              </CardDate>
              <CardDate>
                Deposit:<Date>{deposit}€</Date>
              </CardDate>
            </CardDateContent>
          </>
        ) : (
          <></>
        )}
        {aceptButtons && (
          <CardDateContent>
            {acepted === 1 ? (
              'Booking acepted'
            ) : (
              <>
                <CardLink to="/" success>
                  Accept
                </CardLink>
                <CardLink to="/" error>
                  Deny
                </CardLink>
              </>
            )}
          </CardDateContent>
        )}
        {start_date && end_date ? (
          <>
            <CardDateContent>
              <CardLink to={`/publication/${id_publication}`}>Show publication</CardLink>
              <CardLink to={`/booking/edit/${id}`}>Edit your booking</CardLink>
            </CardDateContent>
          </>
        ) : (
          <>
            <CardDateContent>
              <CardLink to={`/publication/${id_publication}`}>Show publication</CardLink>
              <CardLink to={`/visit/edit/${id}`}>Edit your visit</CardLink>
            </CardDateContent>
          </>
        )}
      </CardWrapper>
    )
  );
}

export default CardBookingVisit;

const CardWrapper = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem;
  text-align: center;
  border-radius: 0.2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  margin: 0.5rem;
`;

const CardLink = styled(LinkShowMore)`
  margin: 0.2rem;
  background: #1679c5;
  background: ${({ success, error }) => (success ? '#26aa5e' : error ? '#e74c3c' : '#1679c5')};
`;

const CardDirection = styled.p`
  font-weight: 700;
`;

const CardDateContent = styled.div`
  display: flex;
  justify-content: center;
`;

const CardDate = styled.p`
  margin: 0.2rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: #4a5568;
  text-transform: uppercase;
`;
const Date = styled.span`
  display: block;
  color: #333333;
`;
