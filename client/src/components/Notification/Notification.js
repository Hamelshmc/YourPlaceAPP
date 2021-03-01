import { CloseIcon } from './styles/CloseIcon';
import { NotificationBody } from './styles/NotificationBody';
import { NotificationBodyContent } from './styles/NotificationBodyContent';
import { NotificationContainer } from './styles/NotificationContainer';
import { NotificationContent } from './styles/NotificationContent';
import { NotificationHeader } from './styles/NotificationHeader';
import { NotificationHelper } from './styles/NotificationHelper';
import { NotificationTime } from './styles/NotificationTime';
import { NotificationTitle } from './styles/NotificationTitle';

const Notification = ({ acepted, title, time, content }) => {
  return (
    <NotificationContainer>
      <NotificationContent acepted={acepted}>
        <NotificationHeader>
          <NotificationTitle>{title}</NotificationTitle>
          <NotificationTime>{time}</NotificationTime>
          <CloseIcon>close</CloseIcon>
        </NotificationHeader>
        <NotificationBody>
          <NotificationBodyContent>{content}</NotificationBodyContent>
          <NotificationHelper />
        </NotificationBody>
      </NotificationContent>
    </NotificationContainer>
  );
};

export default Notification;
