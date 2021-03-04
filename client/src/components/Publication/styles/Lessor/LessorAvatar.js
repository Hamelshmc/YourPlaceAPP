import styled from 'styled-components';

const LessorAvatar = styled.div`
  margin-right: ${({ theme }) => theme.margins[0]};
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;
export default LessorAvatar;
