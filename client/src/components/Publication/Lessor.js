import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../shared/Icon';
import IconSvg from '../shared/IconSvg/IconSVG';
import StartRating from '../shared/StartRating';

function Lessor({ url, name, phoneNumber }) {
  return (
    <LessorWrapper>
      <LessorTittle>Lessor</LessorTittle>
      <LessorProfile>
        <LessorAvatar>
          <img
            src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=751&amp;q=80"
            loading="lazy"
            alt="…"
            width="200"
            height="200"
          />
        </LessorAvatar>
        <div>
          <LessorName>Pepe</LessorName>
          <StartRating value={5} disabled size=".813rem" />
        </div>
        <IconContainer>
          <LessorLink href={`tel:+34${phoneNumber}`}>
            <IconLessor>phone</IconLessor>
          </LessorLink>
          <LessorLinkRouter to="/messages/:id">
            <IconLessor>chat</IconLessor>{' '}
          </LessorLinkRouter>
          <LessorLink href={`https://wa.me/${phoneNumber}`}>
            <IconSvg svg="whatsapp" />
          </LessorLink>
        </IconContainer>
      </LessorProfile>
    </LessorWrapper>
  );
}

const LessorWrapper = styled.section`
  display: flex;
  padding: ${({ theme }) => theme.padding[1]};
  border-top: 1px solid ${({ theme }) => theme.card.borderColor};
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.card.lessorColor};
  flex-direction: column;
`;

const LessorTittle = styled.div`
  letter-spacing: 0.025em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSizes.smaller};
  color: ${({ theme }) => theme.fontColor.alternative};
  font-weight: 700;
`;

const LessorProfile = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme }) => theme.padding[0]};
`;

const LessorAvatar = styled.div`
  margin-right: ${({ theme }) => theme.margins[0]};
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

const LessorName = styled.p`
  font-weight: 700;
`;
const IconContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-evenly;
`;

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
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;

const LessorLinkRouter = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 0.5rem;
  text-decoration: none;
  text-shadow: ${({ theme }) => theme.boxShadow.default};
  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;

const IconLessor = styled(Icon)`
  font-size: 1.8rem;
`;

export default Lessor;
