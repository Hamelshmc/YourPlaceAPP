import styled from 'styled-components';

const FilterInput = styled.input`
  &[type='checkbox'] {
    display: none;
  }
  &[type='checkbox']:checked ~ nav {
    display: flex;
  }
  &[type='checkbox']:checked + label {
    background-color: #f7f7f7;
    color: $color-03;
    backdrop-filter: blur(25px);
  }
`;
export default FilterInput;
