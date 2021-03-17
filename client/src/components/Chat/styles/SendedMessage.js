import styled from 'styled-components';
import Message from './Message';

const SendedMessage = styled(Message)`
  float: right;
  text-align: right;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0 0 1rem 0;
`;

export default SendedMessage;
