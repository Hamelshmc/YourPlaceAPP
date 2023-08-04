import styled from 'styled-components';

const FilterContent = styled.nav`
  position: absolute;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;
  right: 0;
  background-color: #f7f7f7;
  border-radius: 0.2rem;
  display: none;
  z-index: 5;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  label {
    background-color: #f7f7f7;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0 0.2rem;
    li {
      margin: 0.5rem;
    }
  }
`;
export default FilterContent;
