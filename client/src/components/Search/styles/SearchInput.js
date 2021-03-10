import styled from 'styled-components';

export const SearchInput = styled.input`
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.9);
  flex: 1 1 auto;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  border: none;
  outline: none;
  &::-webkit-search-cancel-button {
    opacity: 0.6;
    filter: saturate(300%);
    font-size: 1.3rem;
  }
  &::placeholder {
    font-size: 0.875rem;
  }
`;

export default SearchInput;
