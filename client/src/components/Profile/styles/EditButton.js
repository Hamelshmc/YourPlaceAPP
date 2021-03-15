import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const EditButton = ({ children }) => (
//   <EditProfileButton to="/profile/edit">{children}</EditProfileButton>
// );

const EditButton = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary['600']};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-radius: 0.2rem;
  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['800']};
    color: white;
  }

  &:active {
    color: white;
  }
`;

export default EditButton;
