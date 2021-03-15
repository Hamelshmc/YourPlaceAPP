import styled from 'styled-components';

const ButtonRating = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  min-width: 3rem;
  max-width: 6rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border-width: 0.2rem;
  border-style: solid;
  background-color: #1679c5;
  color: white;
  border-image: linear-gradient(to bottom, #1679c5, rgba(0, 0, 0, 0)) 1 100%;
  width: 100%;
  &:hover {
    background-color: #153b5b;
    color: white;
  }
`;

export default ButtonRating;
