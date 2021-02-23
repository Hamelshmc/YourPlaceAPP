import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  & > * {
    grid-column: col-start/span 12;
  }
`;

export default Wrapper;
