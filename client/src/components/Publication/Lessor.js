import React from 'react';
import styled from 'styled-components';

function Lessor({ url, name, phoneNumber }) {
  return (
    <LessorWrapper>
      <LessorTittle>Lessor</LessorTittle>
      <LessorProfile>
        <LessorAvatar>
          <img
            src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=751&amp;q=80"
            loading="lazy"
            alt="…"
            width="200"
            height="200"
          />
        </LessorAvatar>
        <div>
          <LessorName>Pepe</LessorName>
          <LessorNumber>65834232</LessorNumber>
        </div>
      </LessorProfile>
    </LessorWrapper>
  );
}

const LessorWrapper = styled.section`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #e2e8f0;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f7fafc;
  flex-direction: column;
`;

const LessorTittle = styled.div`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #718096;
  font-weight: 700;
`;

const LessorProfile = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
`;

const LessorAvatar = styled.div`
  margin-right: 0.75rem;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

const LessorName = styled.p`
  font-weight: 700;
  color: #1a202c;
`;

const LessorNumber = styled.p`
  font-size: 0.875rem;
`;

export default Lessor;
