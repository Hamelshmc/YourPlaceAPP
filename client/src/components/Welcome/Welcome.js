import Confetti from 'react-confetti';
import { Image } from './styles/Image';
import { TittleWelcome } from './styles/TittleWelcome';
import { WelcomeContainer } from './styles/WelcomeContainer';

function Welcome() {
  return (
    <WelcomeContainer>
      <Confetti numberOfPieces={300} recycle={true} />
      <Image src="assets/House.svg" alt="welcome" loading="lazy" width="" height="300" />
      <TittleWelcome>HOME SWEET HOME</TittleWelcome>
    </WelcomeContainer>
  );
}

export default Welcome;
