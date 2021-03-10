import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  flex: 0 1 max(45rem);
  border-radius: 0.2rem;
  margin: 0.5rem;
  align-self: center;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;
export default SearchForm;
