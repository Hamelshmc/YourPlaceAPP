/* eslint-disable camelcase */
import { Image, Transformation } from 'cloudinary-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IconSvg from '../shared/IconSvg/IconSVG';
import StartRating from '../shared/StartRating';
import IconContainer from './styles/Lessor/IconContainer';
import IconLessor from './styles/Lessor/IconLessor';
import LessorAvatar from './styles/Lessor/LessorAvatar';
import LessorLink from './styles/Lessor/LessorLink';
import LessorLinkRouter from './styles/Lessor/LessorLinkRouter';
import LessorName from './styles/Lessor/LessorName';
import LessorProfile from './styles/Lessor/LessorProfile';
import LessorTittle from './styles/Lessor/LessorTittle';
import LessorWrapper from './styles/Lessor/LessorWrapper';

const cloudName = 'yourplace';
function Lessor({ lessor }) {
  const { picture = 'avatar.jpg', telephone, fullname, email, userRating, id_user } = lessor;

  return (
    <LessorWrapper>
      <LessorTittle>Lessor</LessorTittle>
      <LessorProfile>
        <LinkLessor to={`/user/${id_user}`}>
          <LessorAvatar>
            <Image
              cloudName={cloudName}
              loading="lazy"
              publicId={picture}
              secure="true"
              dpr="auto"
              responsive
              width="auto"
              responsiveUseBreakpoints="true">
              <Transformation aspectRatio="4:3" crop="fill" />
              <Transformation quality="auto" fetchFormat="auto" crop="scale" height="50" />
            </Image>
          </LessorAvatar>
          <div>
            {fullname ? (
              <LessorName>{fullname}</LessorName>
            ) : (
              <LessorName>{email && email.split('@')[0]}</LessorName>
            )}
            <StartRating value={userRating} disabled size=".813rem" />
          </div>
        </LinkLessor>
        <IconContainer>
          <LessorLink href={`tel:+34${telephone}`}>
            <IconLessor>phone</IconLessor>
          </LessorLink>
          <LessorLinkRouter to="/messages/:id">
            <IconLessor>chat</IconLessor>
          </LessorLinkRouter>
          <LessorLink href={`https://wa.me/${telephone}`}>
            <IconSvg svg="whatsapp" />
          </LessorLink>
        </IconContainer>
      </LessorProfile>
    </LessorWrapper>
  );
}

const LinkLessor = styled(Link)`
  display: flex;
  text-decoration: none;
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

export default Lessor;
