import { Image, Transformation } from 'cloudinary-react';
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

const cloudName = 'yourplace';
function Lessor({ url, name, phoneNumber, email }) {
  return (
    <LessorWrapper>
      <LessorTittle>Lessor</LessorTittle>
      <LessorProfile>
        <LessorAvatar>
          <Image
            cloudName={cloudName}
            loading="lazy"
            publicId={url}
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
          {name ? <LessorName>{name}</LessorName> : <LessorName>{email.split('@')[0]}</LessorName>}
          <StartRating value={5} disabled size=".813rem" />
        </div>
        <IconContainer>
          <LessorLink href={`tel:+34${phoneNumber}`}>
            <IconLessor>phone</IconLessor>
          </LessorLink>
          <LessorLinkRouter to="/messages/:id">
            <IconLessor>chat</IconLessor>
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
