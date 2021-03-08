import React from 'react';
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

export default Lessor;
