import React from 'react';
import LinkShowMore from '../Publication/styles/Publication/LinkShowMore';

function CardBookingVisit() {
  return (
    <li>
      <p>Start date: 22-05-1998</p>
      <p>End date: 22-05-1998</p>
      <LinkShowMore to="/">Accept</LinkShowMore>
      <LinkShowMore to="/">Deny</LinkShowMore>
    </li>
  );
}

export default CardBookingVisit;
