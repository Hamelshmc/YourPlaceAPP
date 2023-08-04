import styled from 'styled-components';

const LessorLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem;
  text-decoration: none;
  letter-spacing: 0.17rem;
  text-shadow: ${({ theme }) => theme.boxShadow.default};

  p {
    margin-left: 0.25rem;
  }

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #1d9cdb;
  }

  &:active {
    color: inherit;
  }
  svg :hover {
    fill: green;
  }
`;

export default LessorLink;
