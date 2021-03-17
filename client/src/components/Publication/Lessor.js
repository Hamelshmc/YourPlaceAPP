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
  const { picture = 'avatar.svg', telephone, fullname, email, userRating, id_user } = lessor;
  const data =
    lessor && picture ? `YourPlace_IMG/${picture.split('YourPlace_IMG/')[1]}` : 'avatar.svg';
  return (
    <LessorWrapper>
      <LessorTittle>Lessor</LessorTittle>
      <LessorProfile>
        <LinkLessor to={`/user/${id_user}`}>
          <LessorAvatar>
            <Image
              cloudName={cloudName}
              loading="lazy"
              publicId={data}
              secure="true"
              dpr="auto"
              responsive
              width="auto"
              responsiveUseBreakpoints="true">
              <Transformation width="150" height="150" gravity="face" radius="max" crop="fill" />
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
          <LessorLinkRouter to={`/chat/${id_user}`}>
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
  border-radius: 0.2rem;
  padding: 0.2rem;
  border: 0.1rem solid transparent;
  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    border: 0.1rem solid #0f58aa;
  }

  &:active {
    color: inherit;
  }
`;

export default Lessor;
