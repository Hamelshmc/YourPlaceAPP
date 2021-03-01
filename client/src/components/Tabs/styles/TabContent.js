import styled from 'styled-components';

const TabContent = styled.section`
  display: none;
  &.selected {
    display: block;
  }
`;

export default TabContent;
