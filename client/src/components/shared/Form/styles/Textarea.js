import styled from 'styled-components';

const Textarea = styled.textarea`
  resize: none;
  height: 11rem;
  width: clamp(18rem, 60%, 30rem);
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  border: none;
  padding: 1rem;
  &::focus {
    outline: 1px solid tomato;
  }
`;

export default Textarea;
