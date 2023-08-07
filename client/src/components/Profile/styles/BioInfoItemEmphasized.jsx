import styled from 'styled-components';
import BioInfoItem from './BioInfoItem';

const BioInfoItemEmphasized = styled(BioInfoItem)`
  padding: 0.3rem 1rem;
  text-align: left;
  color: $font-color-emphasis;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  span {
    margin-right: 0.3rem;
  }
`;
export default BioInfoItemEmphasized;
