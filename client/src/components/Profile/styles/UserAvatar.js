import styled from 'styled-components';

const UserAvatar = styled.img`
  border-radius: 50%;
  height: 75px;
  max-width: 100%;
  display: block;
  object-fit: contain;
  object-position: center;
  border: 2px solid var(--background-opacity-09);
  box-shadow: $box-shadow-card;
  filter: drop-shadow($box-shadow-card);
`;

export default UserAvatar;
