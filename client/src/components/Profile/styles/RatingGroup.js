import styled from 'styled-components';

const RatingGroup = styled.div`
  display: inline-flex;
  input:hover ~ label span {
    color: #ddd;
  }
  input::checked ~ label span {
    color: orange;
  }
`;
export default RatingGroup;
