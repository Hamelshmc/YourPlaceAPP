import styled from 'styled-components';

const ProfileHeader = styled.header`
  background-image: ${({ background }) =>
    background ? `url(${background})` : 'url(/assets/UserBackground.jpg)'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 7rem;
  display: flex;
  align-items: center;
  padding: 5rem 1rem 0rem 1rem;
`;

export default ProfileHeader;
