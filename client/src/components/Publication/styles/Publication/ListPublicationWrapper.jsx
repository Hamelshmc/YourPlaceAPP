import styled from 'styled-components';

const ListPublicationWrapper = styled.ul`
  display: grid;
  grid-row: 2;
  grid-template-columns: repeat(auto-fit, minmax(15.5rem, 1fr));
  grid-gap: 1rem;
  list-style-type: none;
  margin: 1rem;
  padding: 0;
  transition: all 300ms;
  @media (min-width: 1281px) {
    justify-content: center;
    align-items: center;
    grid-gap: 1.5rem;
    margin: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }
`;
export default ListPublicationWrapper;
